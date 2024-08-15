exports.testApi = async (req, res) => {
    try{
        return res.status(200).json({
            status: 'success', 
            message: 'I am Test API ❤'
        })

    }catch(error){
        return res.status(500).json({
            status: 'failed', 
            message: "Internal Server Error"
        })
    }
}