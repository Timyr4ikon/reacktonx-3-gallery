import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {ImageItem} from '../ImageGalleryItem/ImageGalleryItem';
import {Button} from '../Button/Button'

const ImageGallerys = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;`

const ImageGallery = ({articles,onClick,allArticles,imgClick}) => {
    return (
      <>
        <ImageGallerys>
            {articles.map(el => <ImageItem item={el} key={el.id} imgClick={imgClick}/>)}
        </ImageGallerys>
        {articles.length !== 0 && articles.length !== allArticles && <Button onClick={onClick}/>}
      </>
    )
}

ImageGallery.propTypes ={
  articles : PropTypes.arrayOf(PropTypes.object).isRequired,
}
export {ImageGallery};
