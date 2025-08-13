// function Assets(){
//     return(
//         <div className="assets">

//         </div>
//     );
// }

const Assets = ()=>{
    assets=['bisquits', 'lollypops', 'ballgums'];
    return(
        <div className="assets">
            <p>Our valued assets include:</p>
            <ul>
                {assets.forEach(asset => {
                    print(<li>{asset}</li>)
                })
                }
            </ul>
        </div>
    );
}

export default Assets