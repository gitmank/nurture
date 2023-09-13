# nurture
SIH'23 idea prototype

# setup
STEP 1 - add an .env.local file with these values
```
GOOGLE_CLIENT_SECRET='GOCSPX-<yoursecret>'
GOOGLE_CLIENT_ID='<yourid>.apps.googleusercontent.com'
MONGO_URI='mongodb+srv://<username>:<password>@.mongodb.net/?retryWrites=true&w=majority'
NEXTAUTH_URL='https://yourdomain.tld'
NEXTAUTH_SECRET='generate with openssl rand -base64 32'
```

STEP 2 - run the following commands
```
npm install
npm run dev
```

