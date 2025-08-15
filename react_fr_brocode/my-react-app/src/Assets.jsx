function Assets(){
    let assets=['bisquits', 'lollipops', 'ballgums'];
    return(
        <div className="assets">
            <p>Our valued assets include:</p>
            <ul>
                <li>{assets[0]}</li>
                <li>{assets[1]}</li>
                <li>{assets[2]}</li>
            </ul>
        </div>
    );
}

// const Assets = ()=>{
//     assets=['bisquits', 'lollypops', 'ballgums'];
//     return(
//         <div className="assets">
//             <p>Our valued assets include:</p>
//             <ul>
//                 {assets.forEach(asset => {
//                     print(<li>{asset}</li>)
//                 })
//                 }
//             </ul>
//         </div>
//     );
// }

export default Assets