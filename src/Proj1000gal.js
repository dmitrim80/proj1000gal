import React, { useState,useEffect } from 'react';
import projData from './projectData';
import './main.css';


const Proj1000gal = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mainImageIndex,setMainImageIndex] = useState(0);

    const setPageIndex = (index) => {
      if (index >= 0 && index < projData.length) {
        setCurrentIndex(index);
        localStorage.setItem('currentPageIndex', index);
        setMainImageIndex(0);
        localStorage.setItem('currentMainImageIndex',0);
      }
    }

    const handlePrev = () => {
      setPageIndex(currentIndex === 0 ? projData.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setPageIndex(currentIndex === projData.length - 1 ? 0 : currentIndex + 1);
  };
  const handlePageChange = (index) => {
    setPageIndex(index);
  };
  const handleImageChange = (index) =>{
    setMainImageIndex(index);
    localStorage.setItem('currentMainImageIndex', index);
  }
  
  

  

  useEffect(()=> {
    const savedPageIndex = localStorage.getItem('currentPageIndex');
    if (savedPageIndex !== null) {
      const parsedPageIndex = parseInt(savedPageIndex, 10);
      if (!isNaN(parsedPageIndex) && parsedPageIndex >= 0 && parsedPageIndex < projData.length) {
        setCurrentIndex(parsedPageIndex);
      } else {
        console.log('Invalid saved page index:', savedPageIndex);
      }
    }
    const savedMainImageIndex = localStorage.getItem('currentMainImageIndex');
    if(savedMainImageIndex !== null) {
      const parsedMainImageIndex = parseInt(savedMainImageIndex,10);
      if(!isNaN(parsedMainImageIndex)&&parsedMainImageIndex >=0){
        setMainImageIndex(parsedMainImageIndex);
      }else{
        console.log('Invalid saved main image index',savedMainImageIndex);
      }
    }
  }, []);

  if (currentIndex < 0 || currentIndex >= projData.length) {
    return <div>Invalid page index</div>; 
  }

  const currentProject = projData[currentIndex];
  if (!currentProject) {
    console.log('No project data available for index:', currentIndex);
    return <div>Loading...</div>;
}
  const totalPages = projData.length;
  const pageNumbers = [];
  
  for (let i = Math.max(0, currentIndex -3); i<= Math.min(totalPages-1, currentIndex + 7); i++) {
    pageNumbers.push(i);
  }
  const renderImages = () => {
    if (currentProject.images && currentProject.images.length>0) {
      return (
        <>
          <div className='left-main-img-container'>
             <img src={currentProject.images[mainImageIndex]} 
             alt={`Project ${currentProject.id} - Main pic`
             } />
          </div>
          <div className='bottom-left-navigation'>
          {
            currentProject.images.map((img, index) => (
              <img key={index} 
              src={img} 
              alt={`Project ${currentProject.id} - ${index + 1}`} 
              onClick={() => handleImageChange(index)}
              style={{
                cursor: 'pointer',
                border: mainImageIndex === index ? '2px solid blue' : 'none'
              }}/>
            ))
          }
          </div>
        </>
      );
    }else{
      return(
        <>
         <div className='left-main-img-container'></div>
        <div className='bottom-left-navigation'></div>
      </>
      );
    }
  };

  return (
    <div className='main'>
        <div className='left-container'>
          <div className='top-left-navigation'>
            {currentProject.id}
          </div>
            {renderImages()}
        </div>
        <div className='right-container'>
          
          <div key={currentProject.id} className='right-main-content'>
              <p>{currentProject.date}</p>
              <p>{currentProject.content}</p>
          </div>
          <div className='bottom-right-navigation'>
            <div className='pagination'>
              <div className='page-numbers'>
                {pageNumbers.map((pageNum) => (
                <span 
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className='page-number'
                    style={{
                        fontWeight: pageNum === currentIndex ? 'bold' : 'normal',
                        fontSize: pageNum === currentIndex ? '1.25em' : '1em',
                        color: pageNum === currentIndex ? 'var(--clr-primary-300)' : 'var(--clr-neutral-100)',
                    }}
                >
                    {pageNum + 1}
                </span>
                ))}
              </div>
              <div className='page-count-box'>
                <button onClick={handlePrev}>Previous</button>
                  <span className='page-count'>{currentIndex + 1} / {projData.length}</span>
                <button onClick={handleNext}>Next</button>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}

export default Proj1000gal;
