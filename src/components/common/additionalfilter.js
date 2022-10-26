import React from "react";
import HoursFilter from "./additional-filter/hoursfilter";
import PositionFilter from "./additional-filter/position-filter";
import ExamBoardFilter from "./additional-filter/exam-board";
import OtherFilter from "./additional-filter/otherfilter";

function AdditionalFilter (){

    return ( 

         <>
            <h4>Additional filters</h4>
		  
		       <HoursFilter /> 
               <PositionFilter />			
		       <ExamBoardFilter/>
			   <OtherFilter/>
			      
         </>

        );
    }
    
    export default AdditionalFilter;