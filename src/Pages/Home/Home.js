import React from 'react';
import Advertisment from './Advertisment';
import CetegoryBox from './CetegoryBox';
import DownloadApp from './DownloadApp';
import Topbanner from './Topbanner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Topbanner></Topbanner>
            <CetegoryBox></CetegoryBox>
            <Advertisment></Advertisment>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;