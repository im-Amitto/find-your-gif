import React, { useState, useEffect } from 'react';
import { apiKey } from '../api/config';
import Gallery from "./Gallery";

export default function Container(props) {

  const [loadMore, setLoadMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [lastQuery, newQuery] = useState("");

    
  useEffect(() => {
    const getData = (searchTerm,load) => {
      if (load || (lastQuery !== "" && lastQuery !== searchTerm)) {
        console.log(lastQuery, searchTerm);
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=${offset}&rating=g&lang=en`)
          .then(res => {
            return !res.ok 
            ? res.json().then(e => Promise.reject(e)) 
            : res.json();
          })
          .then(res => {
            if (lastQuery !== searchTerm){
              newQuery(searchTerm);
              props.setState([...res.data]);
              setOffset(24);
            }else{
              newQuery(searchTerm);
              props.setState([...props.state, ...res.data]);
              setOffset(offset+24);
            }
          });
      }
    };

    getData(props.searchTerm,loadMore);
    setLoadMore(false);
  }, [lastQuery, offset,props, props.searchTerm,loadMore]);

  useEffect(() => {
    const list = document.getElementById('list')
    if(props.scrollable) {   
      // list has fixed height
      list.addEventListener('scroll', (e) => {
        const el = e.target;
        if(el.scrollTop + el.clientHeight === el.scrollHeight) {
          setLoadMore(true);
        }
      });  
    } else {  
      // list has auto height  
      window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
          setLoadMore(true);
        }
      });
    }
  }, [props.scrollable]);

  useEffect(() => {
    const list = document.getElementById('list');

    if(list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [props.state]);

  
  return (
    <div className="photo-container">
      <Gallery data={props.state} />
    </div>
  );
};