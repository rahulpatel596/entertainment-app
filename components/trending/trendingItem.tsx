export default function TrendingItem (props) {
    console.log(props);
    return (
        <div className='h-[90%] w-[400px] bg-gray-200 inline-block'>
            {/* <h1 className='text-white'>{props.item.fields.title}</h1> */}
            <img src="//images.ctfassets.net/l5unjax6sbx0/129Kozl5YzMN2TcvaJWNmE/40ccbfb693cbbd12c500b03ec6875645/large.jpg"/>
        </div>
    )
}

export async function getServerSideProps(props) {
    const data =  await fetch(`http://localhost:3000/api/thumbnail/?assetId=${props.item.fields.thumbnail[3].sys.id}`).then(res =>{ return res});
    return {props: {data}}
  }