# nurture
EPICS Project (DSN3099) idea prototype 

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
### Phase 1 - authentication
- [x] create landing page
- [x] configure firebase
- [x] store user to DB

### Phase 2 - onboarding
- [x] create dashboard
- [x] initial assessment
- [x] initial evaluation

### Phase 3 - data collection
- [x] daily checkins
- [ ] weekly and monthly stats

### Phase 4 - monitoring and alerts
- [ ] guardian view
- [ ] school counsellor view
