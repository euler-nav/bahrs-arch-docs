/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "AMS Advanced Air Mobility Sensors UG", "index.html", [
    [ "EULER-NAV Baro-Inertial Attitude and Heading Reference System (BAHRS)", "index.html", null ],
    [ "Architecture constraints", "md_doc_pages_page_architecture_constraints.html", null ],
    [ "Building block view", "md_doc_pages_page_building_block_view.html", [
      [ "Level 0", "md_doc_pages_page_building_block_view.html#sec_bb_view_level_0", null ],
      [ "Level 1", "md_doc_pages_page_building_block_view.html#sec_bb_view_level_1", [
        [ "Application software", "md_doc_pages_page_building_block_view.html#subsec_asw", null ],
        [ "Basic software", "md_doc_pages_page_building_block_view.html#subsec_bsw", null ],
        [ "Runtime Environment", "md_doc_pages_page_building_block_view.html#subsec_rte", null ]
      ] ],
      [ "Level 2", "md_doc_pages_page_building_block_view.html#sec_bb_view_level_2", [
        [ "Basic software", "md_doc_pages_page_building_block_view.html#subsec_bsw_level_2", [
          [ "List of basic software components", "md_doc_pages_page_building_block_view.html#subsubsec_bsw_swc_list", null ]
        ] ],
        [ "Runtime environment", "md_doc_pages_page_building_block_view.html#subsec_rte_level_2", null ],
        [ "Application software", "md_doc_pages_page_building_block_view.html#subsec_asw_level_2", [
          [ "List of application software components", "md_doc_pages_page_building_block_view.html#subsubsec_asw_swc_list", null ]
        ] ]
      ] ],
      [ "Level 3", "md_doc_pages_page_building_block_view.html#sec_bb_view_level_3", [
        [ "Application software", "md_doc_pages_page_building_block_view.html#subsec_asw_level_3", [
          [ "UML component diagram", "md_doc_pages_page_building_block_view.html#subsubsec_asw_level_3_component_diagram", null ]
        ] ],
        [ "Basic software", "md_doc_pages_page_building_block_view.html#subsec_bsw_level_3", [
          [ "UML component diagram", "md_doc_pages_page_building_block_view.html#subsubsec_bsw_level_3_component_diagram", null ]
        ] ]
      ] ]
    ] ],
    [ "Cross-cutting concepts", "md_doc_pages_page_cross_cutting_concerns.html", null ],
    [ "Deployment view", "md_doc_pages_page_deployment_view.html", null ],
    [ "Design decisions", "md_doc_pages_page_design_decisions.html", [
      [ "Runtime environment", "md_doc_pages_page_design_decisions.html#sec_design_decisions_rte", [
        [ "Port access protection", "md_doc_pages_page_design_decisions.html#subsec_design_decisions_port_protection", null ],
        [ "Software component port data types", "md_doc_pages_page_design_decisions.html#subsec_design_decisions_port_data_types", null ],
        [ "Auto-generation of runtime environment", "md_doc_pages_page_design_decisions.html#subsec_design_decisions_rte_autogeneration", null ]
      ] ]
    ] ],
    [ "Glossary", "md_doc_pages_page_glossary.html", [
      [ "Abbreviations", "md_doc_pages_page_glossary.html#sec_glossary_abbreviations", [
        [ "BAHRS", "md_doc_pages_page_glossary.html#BAHRS", null ],
        [ "SWC", "md_doc_pages_page_glossary.html#SWC", null ],
        [ "BSW", "md_doc_pages_page_glossary.html#BSW", null ],
        [ "ASW", "md_doc_pages_page_glossary.html#ASW", null ],
        [ "FDI", "md_doc_pages_page_glossary.html#FDI", null ]
      ] ],
      [ "Terms and definitions", "md_doc_pages_page_glossary.html#sec_glossary_definitions", null ]
    ] ],
    [ "Introduction and goals", "md_doc_pages_page_intro_and_goals.html", null ],
    [ "Quality requirements", "md_doc_pages_page_quality_requirements.html", null ],
    [ "Risks and technical debt", "md_doc_pages_page_risks_and_tech_debt.html", null ],
    [ "Runtime view", "md_doc_pages_page_runtime_view.html", [
      [ "BAHRS software activity diagram", "md_doc_pages_page_runtime_view.html#sec_runtime_view_bahrs_sw_activity", null ],
      [ "FreeRTOS tasks", "md_doc_pages_page_runtime_view.html#sec_runtime_view_freertos_tasks", [
        [ "Task scheduling and interactions", "md_doc_pages_page_runtime_view.html#subsec_runtime_view_scheduling_and_interaction", [
          [ "Signal chain: BAHRS Filter 1", "md_doc_pages_page_runtime_view.html#subsubsec_runtime_view_filter_chain_1", null ],
          [ "Signal chain: BAHRS Filters 2 and 3", "md_doc_pages_page_runtime_view.html#subsubsec_runtime_view_filter_chain_2_and_3", null ]
        ] ],
        [ "Internal behavior of tasks", "md_doc_pages_page_runtime_view.html#subsec_runtime_view_task_internal_behavior", [
          [ "Cyclic task (5ms interval)", "md_doc_pages_page_runtime_view.html#subsubsec_runtime_view_task_5_ms", null ],
          [ "Cyclic task (10ms interval)", "md_doc_pages_page_runtime_view.html#subsubsec_runtime_view_task_10_ms", null ]
        ] ]
      ] ],
      [ "Software components", "md_doc_pages_page_runtime_view.html#sec_runtime_view_internal_behavior_swc", [
        [ "Internal behavior of IMU monitor SWC", "md_doc_pages_page_runtime_view.html#subsec_runtime_view_imu_monitor_activity", null ],
        [ "Internal behavior of Barometer monitor SWC", "md_doc_pages_page_runtime_view.html#subsec_runtime_view_barometer_monitor_activity", null ],
        [ "Internal behavior of Vertical channel monitor SWC", "md_doc_pages_page_runtime_view.html#subsec_runtime_view_vertical_channel_monitor_activity", null ],
        [ "behavior of  Attitude monitor SWC", "md_doc_pages_page_runtime_view.html#subsec_runtime_view_attitude_monitor_activityInternal", null ],
        [ "FDI activity for an arbitrary scalar signal", "md_doc_pages_page_runtime_view.html#subsec_runtime_view_scalar_signal_fdi_activity", null ]
      ] ]
    ] ],
    [ "Solution strategy", "md_doc_pages_page_solution_strategy.html", [
      [ "General", "md_doc_pages_page_solution_strategy.html#sec_solution_strategy_general", [
        [ "Operating system", "md_doc_pages_page_solution_strategy.html#subsec_solution_strategy_operating_system", null ],
        [ "Programming language", "md_doc_pages_page_solution_strategy.html#subsec_solution_strategy_programming_language", null ],
        [ "Source code classification", "md_doc_pages_page_solution_strategy.html#subsec_solution_strategy_source_file_types", [
          [ "Software components", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_software_component", null ],
          [ "Operating system", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_operating_system", null ],
          [ "Libraries", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_libraries", null ]
        ] ],
        [ "Usage of dynamic memory", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_dynamic_memory", null ]
      ] ],
      [ "Patterns and principles", "md_doc_pages_page_solution_strategy.html#sec_solution_strategy_patterns_and_principles", [
        [ "Software components", "md_doc_pages_page_solution_strategy.html#subsec_solution_strategy_software_components", [
          [ "Principles", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_swc_principles", null ],
          [ "Design patterns", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_swc_patterns", null ]
        ] ],
        [ "Runtime environment (RTE)", "md_doc_pages_page_solution_strategy.html#subsec_solution_strategy_runtime_environment", [
          [ "Principles and patterns", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_rte_principles", null ]
        ] ]
      ] ],
      [ "Signal processing algorithms", "md_doc_pages_page_solution_strategy.html#sec_solution_strategy_algorithms", [
        [ "Estimation of attitude and vertical motion", "md_doc_pages_page_solution_strategy.html#subsec_solution_strategy_attitude_and_vertical_motion_estimation", [
          [ "Introduction", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_estimation_intro", null ],
          [ "State vector", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_estimation_state_vector", null ],
          [ "State error vector", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_estimation_error_state_vector", null ],
          [ "Technology decisions", "md_doc_pages_page_solution_strategy.html#subsubsec_solution_strategy_estimation_decisions", [
            [ "Decoupling of magnetic heading estimation", "md_doc_pages_page_solution_strategy.html#par_solution_strategy_technology_decision_1", null ],
            [ "Single IMU signal source for every filter", "md_doc_pages_page_solution_strategy.html#par_solution_strategy_technology_decision_2", null ]
          ] ]
        ] ]
      ] ]
    ] ],
    [ "System scope and context", "md_doc_pages_page_system_scope_and_context.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_ams_assert_8cpp.html",
"_c_scha63_t_driver_8h.html#a81a53cfdf58ce640ca3377906b09091e",
"class_c_icm20789_driver.html#a6e345b9c38d18b90bb58724a8bdfe067",
"functions_g.html",
"struct_c_nvm_driver_1_1_s_assertions.html",
"struct_n_magnetic_heading_filter_api_1_1_s_magnetometer_measurement.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';