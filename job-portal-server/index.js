const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();


//middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

const verifyToken = (req, res, next) => {
  console.log("Inside the varify token", req.cookies)
  const token = req?.cookies?.token

  if (!token) {
    return res.status(401).send({ message: "Unauthorized token!!" })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Unauthorized token" })
    }
    next();
  })
}



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const jobsCollection = client.db("jobPortal").collection("jobs")
    const applicationCollection = client.db("jobPortal").collection("applications")


    app.get("/jobs", async (req, res) => {
      const email = req.query.email;
      let query = {};
      if (email) {
        query = { hrEmail: email }
      }
      const result = await jobsCollection.find(query).limit(4).toArray();
      res.send(result)
    })


    //Token releted apis
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "5hr" })

      res.cookie("token", token, {
        httpOnly: true,
        secure: false
      })
        .send({ success: true })
    })


    app.get("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(filter);
      res.send(result)
    })


    app.get("/job-applications", verifyToken, async (req, res) => {
      const email = req.query.email
      const filter = { applicant_email: email }

      console.log("cuk cuk cookies", req.cookies)
      const result = await applicationCollection.find(filter).toArray()

      for (const application of result) {
        const filter = { _id: new ObjectId(application.jobId) }
        const job = await jobsCollection.findOne(filter)

        if (job) {
          application.title = job.title,
            application.company = job.company,
            application.company_logo = job.company_logo,
            application.location = job.location
        }
      }
      res.send(result)
    })


    app.get("/job-applications/jobs/:jobId", async (req, res) => {
      const jobId = req.params.jobId;
      const query = { jobId: jobId }
      const result = await applicationCollection.find(query).toArray()
      res.send(result)
    })



    //POST APIS
    app.post("/job-applications", async (req, res) => {
      const data = req.body;
      const cursor = await applicationCollection.insertOne(data)
      res.send(cursor)
    })

    app.post("/jobs", async (req, res) => {
      const data = req.body;
      const result = await jobsCollection.insertOne(data)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get("/", (req, res) => {
  res.send("Job is falling from the sky...")
});

app.listen(port, () => {
  console.log(`Job portal is running on port: ${port}`)
})