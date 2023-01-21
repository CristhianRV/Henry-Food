
const listDiets = async (req, res)=>{
    try {
        
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    listDiets,
}