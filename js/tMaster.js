export default class tMaster{
    constructor(auth){
        this.author = auth;
        this.questions = [];
    }
    addQuestion(question){
        this.questions.push(question);
    }
    export(){
        let e = {
            author: this.author,
            questions: this.questions
        }
        return e;
    }
}