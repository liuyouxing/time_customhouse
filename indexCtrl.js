vx.module('ibsapp',[]).controller("indexCtrl",['$scope',function($scope){
    /*this is content which you can config */
    var Q1="Select the purpose of your travel.",
        Q2="Select your current time citizenship.",
        Q3="Select your Time Wanderer passport.",
        Q4="Select the purpose of your trip to 2089.",
        Q5="Question 5",
        Q6="Question 6",
        Q7="Select your current time citizenship.",
        Q8="Question 8",
        /**this is choice */
        C1="Temporary Stay",
        C2="Time Immigration",
        C3="Information Age (1970-2030)",
        C4="Experience Age (2031-2070)",
        C5="Exoplanets Age (2131-2200)",
        C6="Regular",
        C7="Diplomatic",
        C8="Time Police",
        C9="Tourism",
        C10="Business",
        C11="Study",
        C12="Choice 12",
        C13="Choice 13",
        C14="Choice 14",
        C15="Choice 15",
        C16="Choice 16",
        C17="Choice 17",
        C18="Information Age (1970-2030)",
        C19="Experience Age (2031-2070)",
        C20="Exoplanets Age (2131-2200)",
        C21="Choice 21",
        C22="Choice 22",
        C23="Choice 23",
        /*this is result,R1 is Result1 & R1E is explain of R1 */
        R1="Additional information required.",
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
        R36="Result 36"
        /*this is explain of result */
        R1E="Scholars from a time period contaminated by pollution and epidemics must submit to extensive health checks. Meet our AI officer in the interview room for indefinite detention.",
        R2E="Result 2 explain",
        R3E="Result 3 explain",
        R4E="Result 4 explain",
        R5E="Result 5 explain",
        R6E="Result 6 explain",
        R7E="Result 7 explain",
        R8E="Result 8 explain",
        R9E="Result 9 explain",
        R10E="Result 10 explain",
        R11E="Result 11 explain",
        R12E="Result 12 explain",
        R13E="Result 13 explain",
        R14E="Result 14 explain",
        R15E="Result 15 explain",
        R16E="Result 16 explain",
        R17E="Result 17 explain",
        R18E="Result 18 explain",
        R19E="Result 19 explain",
        R20E="Result 20 explain",
        R21E="Result 21 explain",
        R22E="Result 22 explain",
        R23E="Result 23 explain",
        R24E="Result 24 explain",
        R25E="Result 25 explain",
        R26E="Result 26 explain",
        R27E="Result 27 explain",
        R28E="Result 28 explain",
        R29E="Result 29 explain",
        R30E="Result 30 explain",
        R31E="Result 31 explain",
        R32E="Result 32 explain",
        R33E="Result 33 explain",
        R34E="Result 34 explain",
        R35E="Result 35 explain",
        R36E="Result 36 explain";
    /* computer code */
    var Question8={
        'Content':Q8,
        'Choices':[{"Choice":C21,"Results":[
                    {'require':C18,'Result':R28,'Explain':R28E},
                    {'require':C19,'Result':R31,'Explain':R31E},
                    {'require':C20,'Result':R34,'Explain':R34E}]},
        {"Choice":C22,"Results":[
                    {'require':C18,'Result':R29,'Explain':R29E},
                    {'require':C19,'Result':R32,'Explain':R32E},
                    {'require':C20,'Result':R35,'Explain':R35E}]},
        {"Choice":C23,"Results":[
                    {'require':C18,'Result':R30,'Explain':R30E},
                    {'require':C19,'Result':R33,'Explain':R33E},
                    {'require':C20,'Result':R36,'Explain':R36E}]}]
    },Question7={
        'Content':Q7,
        'Choices':[{"Choice":C18,"Next":Question8},
        {"Choice":C19,"Next":Question8},
        {"Choice":C20,"Next":Question8}]
    },Question6={
        'Content':Q6,
        'Choices':[{"Choice":C15,"Results":[
                    {'require':C3,'Result':R19,'Explain':R19E},
                    {'require':C4,'Result':R22,'Explain':R22E},
                    {'require':C5,'Result':R25,'Explain':R25E}]},
                {"Choice":C16,"Results":[
                    {'require':C3,'Result':R20,'Explain':R20E},
                    {'require':C4,'Result':R23,'Explain':R23E},
                    {'require':C5,'Result':R26,'Explain':R26E}]},
                {"Choice":C17,"Results":[
                    {'require':C3,'Result':R21,'Explain':R21E},
                    {'require':C4,'Result':R23,'Explain':R23E},
                    {'require':C5,'Result':R24,'Explain':R24E}]}]
        },Question5={
        'Content':Q5,
        'Choices':[{"Choice":C12,"Results":[
                    {'require':C3,'Result':R10,'Explain':R10E},
                    {'require':C4,'Result':R13,'Explain':R13E},
                    {'require':C5,'Result':R16,'Explain':R16E}]},
                {"Choice":C13,"Results":[
                    {'require':C3,'Result':R11,'Explain':R11E},
                    {'require':C4,'Result':R14,'Explain':R14E},
                    {'require':C5,'Result':R17,'Explain':R17E}]},
                {"Choice":C14,"Results":[
                    {'require':C3,'Result':R12,'Explain':R12E},
                    {'require':C4,'Result':R15,'Explain':R15E},
                    {'require':C5,'Result':R18,'Explain':R18E}]}]
    },Question4={
        'Content':Q4,
        'Choices':[{"Choice":C9,"Results":[
                    {'require':C3,'Result':R1,'Explain':R1E},
                    {'require':C4,'Result':R4,'Explain':R4E},
                    {'require':C5,'Result':R7,'Explain':R7E}]},
        {"Choice":C10,"Results":[
                    {'require':C3,'Result':R2,'Explain':R2E},
                    {'require':C4,'Result':R5,'Explain':R5E},
                    {'require':C5,'Result':R8,'Explain':R8E}]},
        {"Choice":C11,"Results":[
                    {'require':C3,'Result':R3,'Explain':R3E},
                    {'require':C4,'Result':R6,'Explain':R6E},
                    {'require':C5,'Result':R9,'Explain':R9E}]}]
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
