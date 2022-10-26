import React from "react";
import HoursFilter from "./additional-filter/hoursfilter";
import PositionFilter from "./additional-filter/position-filter";
import EducationLevelFilter from "./jobsearch-filter/educationlevel";
import SubjectFilter from "./jobsearch-filter/subjectfilter";
import ContractTypeFilter from "./jobsearch-filter/contract-typefilter";
import SuitableForFilter from "./jobsearch-filter/suitablefor-filter";
import GenderFilter from "./jobsearch-filter/genderfilter";


function JobSearchFilter (){

    return ( 

         <>
            <h4>Additional filters</h4>
		      
               <EducationLevelFilter />
               <PositionFilter />		      
               <SubjectFilter/>	
               <HoursFilter /> 
               <ContractTypeFilter/>
               <SuitableForFilter/>	
		       <GenderFilter/>
			      
         </>

        );
    }
    
    export default JobSearchFilter;