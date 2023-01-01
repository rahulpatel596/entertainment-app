import axios from  'axios';

export default function trendingHandler (req: any, res: any, next: any) {

    const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_ENTERTAINMENT_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN}&metadata.tags.sys.id[in]=trending`;

    if (req.method === 'GET') {
        axios.get(url)
        .then(({data}) => {res.status(200).send(data);})
        .catch(err => {res.status(400).send(err);});
    } else {
        return ;
    }
}