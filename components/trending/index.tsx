import TrendingItem from './trendingItem';

export default function Trending(props: any) {
    console.log(props.data);
    return (
        <div className='ml-6'>
            <div><span className='text-white'>Trending</span></div>
            <div className='h-60 overflow-x-auto whitespace-nowrap p-4'>
                {/* {props.data.items.map((item: any) => 
                    <TrendingItem key={item.fields.title} images={props.data.includes.Asset.filter(img => item.sys.thumbnail.map(i => i.sys.id) === img.sys.id)} item={item}/>
                )} */}
            </div>
        </div>
    )
}