export default class qManager{
    constructor(type){
        switch (type){
            case 1:
                this.as = this.createTemplate_I();
                break;
            case 2:
                this.as = this.createTemplate_II();
        }
    }
    createTemplate_I(){
        let q = {
            "type": "question-answer",
            "version": 1,
            "question": "",
            "answer": ""
        }
        return q;
    }
    createTemplate_II(){
        let q ={
            "type": "q-select-answer",
            "version": 1,
            "question": "",
            "answers": [],
            "correctIndex": []
        }
        return q;
    }
}