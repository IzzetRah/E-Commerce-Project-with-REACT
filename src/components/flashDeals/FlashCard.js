import React from 'react'

const FlashCard = (productItems) => {
    return (
        <>
            {
                productItems.map((productItems) => {

                    return (
                        <div className='box'>
                            <div className='product mtop'>
                                <div className='img'>
                                    <span className='discount'>$ Off</span>
                                    <img src='' alt=''></img>
                                    <div className='product-like'>
                                        <label></label> <br />
                                        <i className='fa-regular fa-heart'></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3></h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4></h4>
                                        <button>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FlashCard
