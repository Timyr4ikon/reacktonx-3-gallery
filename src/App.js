import React, { useState,useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar'
import fetchRequest from './utils/API';
import {ImageGallery} from './components/ImageGallery/ImageGallery';
import {Loader} from './components/Loader/Loader'
import {Modal} from './components/Modal/Modal'

export default () => {
  const [searchQuery,setSearchQuery] = useState('');
  const [page] = useState(1);
  const [nextPage,setNextPage] = useState(page+1)
  const [galleryList,setGalleryList] = useState([]);
  const [isLoaded,setLoader] = useState(false);
  const [totalArticles,setTotalArticles] = useState(null);
  const [overlayImg,setOverlayImg] = useState(null);


  useEffect(() =>{
      if (galleryList.length > 12) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
  },[galleryList])

  

  const handleChange = (e) =>{
    const {value} = e.target;
    setSearchQuery(value);
  } 

  const onSubmit = (e) =>{
    e.preventDefault();
    setLoader(true);
    fetchRequest(searchQuery,page)
      .then(data => {
        const articles = data.data.hits;
        setGalleryList(articles);
        setLoader(false);
        setTotalArticles(data.data.totalHits)
        
      })
  }

  const loadMoreClick = (e) =>{
    fetchRequest(searchQuery,nextPage)
      .then(data => {
        const articles = data.data.hits;
        setGalleryList([...galleryList,...articles])
        setNextPage(nextPage+1);
      })
  }

  const imageClick=(e)=>{
    setOverlayImg(e.target.dataset.action)
  }
  const overlayClick=(e)=>{
      if(e.target.nodeName !== 'IMG'){
        setOverlayImg(null)
      }
  }    
  const exitByEsc = () =>{
    setOverlayImg(null)

  }
    return (
      <>
        <Searchbar defaultValue={searchQuery} onChange={handleChange} onSubmit={onSubmit} />
        {isLoaded === true ? <Loader/> : <ImageGallery articles={galleryList} onClick={loadMoreClick} allArticles={totalArticles} imgClick={imageClick}/>}
        {overlayImg !== null && <Modal src={overlayImg} overlayClick={overlayClick} esc={exitByEsc}/>}
      </>
    );
};