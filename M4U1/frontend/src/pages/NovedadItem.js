import React from 'react';


const NovedadItem = (props) => {
    const {title,subtitle,imagen,body} = props;

    return (
        <div className='novedades'>
            <h2>{title}</h2>
            <h2>{subtitle}</h2>
            <img className='img'src={imagen} alt='imagen' />
            <div dangerouslySetInnerHTML= {{ __html: body}} />
            <hr />
        </div>
    );
}

export default NovedadItem;