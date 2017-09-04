# Movies catalog site

Itechart Lab task #6

## Installing

### Backend part

To create MongoDB database run:

```
cd backend
mongo
use movies
db.createCollection('movies')
exit
```

Then to fill the movies collection up run query script:

```
mongo localhost:27017/movies MoviesCollectionInitializationQuery.js
```

To install backend part run:

```
npm install
npm start
```

### Frontend part

To install frontend part run:

```
cd frontend
npm install
npm start
```
