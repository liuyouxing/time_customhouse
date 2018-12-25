vx.module('ibsapp',[]).controller("indexCtrl",['$scope',function($scope){
    var Q1="Question 1",
    Q2="Question 2",
    Q3="Question 3",
    Q4="Question 4",
    Q5="Question 5",
    Q6="Question 6",
    Q7="Question 7",
    Q8="Question 8",
    /**this is choice */
    C1="Choice 1",
    C2="Choice 2",
    C3="Choice 3",
    C4="Choice 4",
    C5="Choice 5",
    C6="Choice 6",
    C7="Choice 7",
    C8="Choice 8",
    C9="Choice 9",
    C10="Choice 10",
    C11="Choice 11",
    C12="Choice 12",
    C13="Choice 13",
    C14="Choice 14",
    C15="Choice 15",
    C16="Choice 16",
    C17="Choice 17",
    C18="Choice 18",
    C19="Choice 19",
    C20="Choice 20",
    C21="Choice 21",
    C22="Choice 22",
    C23="Choice 23",
    /*this result */
    R1="Result 1",
    R2="Result 2",
    R3="Result 3",
    R4="Result 4",
    R5="Result 5",
    R6="Result 6",
    R7="Result 7",
    R8="Result 8",
    R9="Result 9",
    R10="Result 10",
    R11="Result 11",
    R12="Result 12",
    R13="Result 13",
    R14="Result 14",
    R15="Result 15",
    R16="Result 16",
    R17="Result 17",
    R18="Result 18",
    R19="Result 19",
    R20="Result 20",
    R21="Result 21",
    R22="Result 22",
    R23="Result 23",
    R24="Result 24",
    R25="Result 25",
    R26="Result 26",
    R27="Result 27",
    R28="Result 28",
    R29="Result 29",
    R30="Result 30",
    R31="Result 31",
    R32="Result 32",
    R33="Result 33",
    R34="Result 34",
    R35="Result 35",
    R36="Result 36";
    /* code */
    var Question8={
        'Content':Q8,
        'Choices':[{"Choice":C21,"Results":[
                    {'require':C18,'Result':R28},
                    {'require':C19,'Result':R31},
                    {'require':C20,'Result':R34}]},
        {"Choice":C22,"Results":[
                    {'require':C18,'Result':R29},
                    {'require':C19,'Result':R32},
                    {'require':C20,'Result':R35}]},
        {"Choice":C23,"Results":[
                    {'require':C18,'Result':R30},
                    {'require':C19,'Result':R33},
                    {'require':C20,'Result':R36}]}]
    },Question7={
        'Content':Q7,
        'Choices':[{"Choice":C18,"Next":Question8},
        {"Choice":C19,"Next":Question8},
        {"Choice":C20,"Next":Question8}]
    },Question6={
        'Content':Q6,
        'Choices':[{"Choice":C15,"Results":[
                    {'require':C3,'Result':R19},
                    {'require':C4,'Result':R22},
                    {'require':C5,'Result':R25}]},
                {"Choice":C16,"Results":[
                    {'require':C3,'Result':R20},
                    {'require':C4,'Result':R23},
                    {'require':C5,'Result':R26}]},
                {"Choice":C17,"Results":[
                    {'require':C3,'Result':R21},
                    {'require':C4,'Result':R23},
                    {'require':C5,'Result':R24}]}]
        },Question5={
        'Content':Q5,
        'Choices':[{"Choice":C12,"Results":[
                    {'require':C3,'Result':R10},
                    {'require':C4,'Result':R13},
                    {'require':C5,'Result':R16}]},
                {"Choice":C13,"Results":[
                    {'require':C3,'Result':R11},
                    {'require':C4,'Result':R14},
                    {'require':C5,'Result':R17}]},
                {"Choice":C14,"Results":[
                    {'require':C3,'Result':R12},
                    {'require':C4,'Result':R15},
                    {'require':C5,'Result':R18}]}]
    },Question4={
        'Content':Q4,
        'Choices':[{"Choice":C9,"Results":[
                    {'require':C3,'Result':R1},
                    {'require':C4,'Result':R4},
                    {'require':C5,'Result':R7}]},
        {"Choice":C10,"Results":[
                    {'require':C3,'Result':R2},
                    {'require':C4,'Result':R5},
                    {'require':C5,'Result':R8}]},
        {"Choice":C11,"Results":[
                    {'require':C3,'Result':R3},
                    {'require':C4,'Result':R6},
                    {'require':C5,'Result':R9}]}]
    },Question3={
        'Content':Q3,
        'Choices':[{"Choice":C6,"Next":Question4},
        {"Choice":C7,"Next":Question5},
        {"Choice":C8,"Next":Question6}]
    },Question2={
        'Content':Q2,
        'Choices':[{"Choice":C3,"Next":Question3},
        {"Choice":C4,"Next":Question3},
        {"Choice":C5,"Next":Question3}]
    },Question1={
        'Content':Q1,
        'Choices':[{"Choice":C1,"Next":Question2},
        {"Choice":C2,"Next":Question7}]
    },Guide={
        'Content':"To gain entry to 2089, please answer the following questions.",
        'Choices':[{"Choice":"Continue","Next":Question1}]
    },Answers=[];
    $scope.dataJson=Guide;
    $scope.doIt=function(item){
        Answers.push(item.Choice);
        if(item.Next){
            $scope.dataJson=item.Next;
        }else{
            for(var i=0;i<item.Results.length;i++){
                var resultObj=item.Results[i];
                for(var j=0;j<Answers.length;j++){
                    if(Answers[j]==resultObj.require){
                        $scope.dataJson=resultObj;
                        return;
                    }
                }

            }
        }
        
    };
    $scope.exit=function(){
        location.reload();
    }

}]);
