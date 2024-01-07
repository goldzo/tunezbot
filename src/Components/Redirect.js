import { useEffect } from 'react';
import { Helmet } from "react-helmet";

const Redirect = ({ link }) => {

    useEffect(() => {
        window.location.href = link;
    }, [link]);

    return (
        <div className='MemeContainer'>
            <Helmet>
                <title>Redirect • Meii</title>
                <meta property="og:title" content="Redirect • Meii" />
                <meta name="description" content="A redirect link for Meii." />
                <meta property="og:description" content="A redirect link for Meii." />
                <meta property="og:url" content="meiibot.xyz" />
            </Helmet>
            <div className='MemeImage'><img rel="prefetch" src="./img/Memes/rickRoll.gif" alt="Rick Roll" width="380px" height="300px"/></div>
            <div className='MemeText'>Never gonna give you up- :3</div>
        </div>
    );
}

export default Redirect;