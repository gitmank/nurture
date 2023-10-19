# nurture
SIH'23 idea prototype

# setup for /nurtureapp
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

# The Plan
### Week 1 - authentication
- [x] configure NextAuth.js
- [ ] store user to DB
- [x] create landing page

### Week 2 - access control
- [ ] upgrade downgrade user role
- [ ] middleware to protect routes based on role
- [ ] role based header navlinks

### Week 3 - student onboarding
- [ ] make user pick role
- [ ] give 'students' a questionnaire

### Week 4 - THE ALGORITHM
- [ ] process questionnaire results
