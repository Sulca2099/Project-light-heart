//chinese food european food tropical food
class test{
    questions;
    answers;
    score;
    cnt;
    user_score;
    constructor(){
        this.questions=["What is your favorite movie","Who is your favorite popstar","what is your favorite city","what is you favorite country","who is your favorite person"];
        this.answers=[["crazy rich asians","titanic","51 first dates"],["taylor swift","beyonce","EJ"],["bejing","newyork","san fransico"],["America","china","mexico"],["Jhon f kenedy","tim cook","That person who was mayor of huoston"]];
        this.score=[[[10,0,0],[0,10,0],[1,2,10]],[[0,10,0],[0,0,10],[0,0,10]],[[10,2,0],[3,2,10],[6,2,14]],[[2,10,3],[10,0,0],[0,3,10]],[[0,0,10],[0,10,0],[0,0,0]]];
        this.cnt=0;
        this.user_score=[0,0,0];
    }
    test_intergrate(){
        alert('loaded');
        document.getElementById('workwithme').innerHTML=this.questions[this.cnt];
        let f=0;
        for(let questioning of this.questions){
            document.getElementById('workwithme').innerHTML+=`<button onclick='urtest.answer(${f})'>${questioning}</button>`;
            f+=1;
        }
    }
    answer(count){
        if(count>4){
            let addedvector=this.score[this.cnt][count];
            let cn=0;
            for(add of addedvector){
                this.user_score[cn]+=add;
                cn+=1;
            }
        } else{
            let favorite = Math.max(this.user_score);
            document.getElementById('workwithme').innerHTML=["chinese food","european food","tropial food"][this.user_score.findIndex(favorite)];
        }
    }
}
let urtest=new test();
urtest.test_intergrate();
