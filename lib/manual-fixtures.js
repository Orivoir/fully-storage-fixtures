/**
 * this file is example manual writing of fixtures
 * you should exec this file for load articles fixtures:
 *
 * > npm run load-manual-fixtures
 */

const fullyStorage = require('fully-storage');

// regenerate collection articles for remove all articles exists before load fixtures data
fullyStorage.regenerate('articles');

// create a new faker object associate to fully storage
const faker = fullyStorage.createFaker( 'en_US' );

faker.options = {

    // associate the faker to the articles collection
    // for auto append data will create below
    collectionName: 'articles',

    // for fully storage auto add `id` key with a integer AUTO_INCREMENT
    AUTO_SAVE_ID: fullyStorage.AUTO_SAVE_ID
};

// number docs should be create
const numberDocs = 10;

faker.forEach( numberDocs, function( generator ) {

    // generator is a **faker** object
    // reference: https://npmkjs.com/package/faker
    // you can generated factory data with this object

    // create a new article with random value
    const article = {};

    article.title = generator.lorem.words( 5 );

    const separator = ' ';
    const sentencesCount = 4;

    article.contentText = generator.lorem.sentences( sentencesCount , separator )

    article.createAt = generator.date.between('now', '-90days' );

    // return the article create
    // faker render **article object** to fully storage and auto append in 'articles' collection
    return article;
} );

console.log('articles manual fixtures has been loaded\n\n\tnpm run storage -- --dump-collections\n\n\tnpm run storage -- --dump articles');