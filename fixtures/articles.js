/**
* @file fixtures of: `articles` collection
*/
class ArticlesFixtures {

    /**
    * @var LOCALITY {string} - language use for generate factory data
    */
    static LOCALITY = "en_US";

    constructor( faker ) {

        this.faker = faker;

        this.faker.options = {

            collectionName: 'articles',

            AUTO_SAVE_ID: true
        };

        this.onGenerate = this.onGenerate.bind( this );
    }

    /**
    * @method onLoad - this method is use by **CLI** for load you'r data fixtures, **do not change method name**
    */
    onLoad() {

        const numberDocs = 5;

        this.faker.forEach( numberDocs, this.onGenerate )
    }

    onGenerate( generator ) {

        // generator is a **faker** object
        // reference: https://npmkjs.com/package/faker
        // you can generated factory data with this object

        const articles = {};

        articles.title = generator.lorem.words( 5 );

        const separator = ' ';
        const sentencesCount = 4;

        articles.contentText = generator.lorem.sentence( sentencesCount, separator );

        articles.createAt = generator.date.between('now', '-90days' );

        return articles;
    }

};

module.exports = ArticlesFixtures;
