const model = require('../model/reviewModel');

module.exports ={
    createReview : async (req , res) =>{
        try {
            
        } catch (error) {
            
        }
    },

    getProductReviews : async (req , res) =>{
        try {
            
        } catch (error) {
            res.status(500).json({ message: 'Error occurred while fetching the review', error: error.message });    
        }
    },

    getReviewById : async (req , res) =>{
        try {
            
        } catch (error) {
            res.status(500).json({ message: 'Error occurred while fetching the review', error: error.message });   
        }
    },

    updateReview : async (req , res) =>{
        try {
            
        } catch (error) {
            res.status(500).json({ message: 'Error occurred while fetching the review', error: error.message });  
        }
    },

    deleteReview : async (req , res) =>{
        try {
            
        } catch (error) {
            res.status(500).json({ message: 'Error occurred while fetching the review', error: error.message });   
        }
    },


}