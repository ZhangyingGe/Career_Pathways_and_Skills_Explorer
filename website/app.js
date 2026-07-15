(function (root) {
  "use strict";

  const ROLE_DATA = [
    {
      role_id: "role_research_assistant",
      career_role: "Research Assistant",
      sector: "Research and higher education",
      role_summary: "Supports academic, social or organisational research projects by helping with literature review, data collection, analysis, records and reporting.",
      degree_relevance_tags: ["sociology", "social sciences", "psychology", "education", "public health", "politics", "economics", "data analytics"],
      essential_skills: ["Literature review", "Research design", "Data collection", "Qualitative research", "Report writing", "Attention to detail"],
      desirable_skills: ["Survey design", "Excel", "Statistical analysis", "Data ethics and confidentiality"],
      typical_entry_stage: "Suitable for undergraduate research experience, placements, final-year projects, graduate assistant roles or postgraduate preparation.",
      evidence_source_ids: ["SRC001", "SRC002", "SRC033"],
      evidence_strength: "moderate"
    },
    {
      role_id: "role_social_researcher",
      career_role: "Research Officer / Social Researcher",
      sector: "Social research and government analysis",
      role_summary: "Designs and delivers social research to answer questions about people, services, policy or society, using qualitative and quantitative evidence.",
      degree_relevance_tags: ["sociology", "social sciences", "politics", "psychology", "criminology", "education", "public policy", "research methods"],
      essential_skills: ["Research design", "Survey design", "Qualitative research", "Quantitative research", "Evidence synthesis", "Report writing"],
      desirable_skills: ["Statistical analysis", "Presentation", "Policy analysis", "Data ethics and confidentiality", "Stakeholder communication"],
      typical_entry_stage: "Relevant from second year onwards through research methods modules, internships, dissertations, placements or graduate researcher routes.",
      evidence_source_ids: ["SRC003", "SRC004", "SRC005", "SRC006"],
      evidence_strength: "strong"
    },
    {
      role_id: "role_market_research_analyst",
      career_role: "Market Research Analyst",
      sector: "Market and customer insight",
      role_summary: "Collects and analyses market, consumer and competitor information to help organisations understand demand, behaviour and opportunities.",
      degree_relevance_tags: ["marketing", "business", "sociology", "psychology", "social sciences", "economics", "statistics", "data analytics"],
      essential_skills: ["Market analysis", "Survey design", "Quantitative research", "Statistical analysis", "Data visualisation", "Report writing"],
      desirable_skills: ["Excel", "Data cleaning", "User or customer research", "Digital analytics", "Presentation"],
      typical_entry_stage: "Useful for students with research methods, statistics, marketing, placement or internship experience; graduate analyst routes are common.",
      evidence_source_ids: ["SRC007", "SRC008", "SRC009", "SRC010"],
      evidence_strength: "strong"
    },
    {
      role_id: "role_customer_insights_analyst",
      career_role: "Customer Insights Analyst",
      sector: "Market and customer insight",
      role_summary: "Turns customer data, survey findings and behaviour evidence into insight that can inform products, services, campaigns or customer experience.",
      degree_relevance_tags: ["marketing", "business", "sociology", "psychology", "social sciences", "data analytics", "statistics", "consumer behaviour"],
      essential_skills: ["User or customer research", "Market analysis", "Data cleaning", "Statistical analysis", "Data visualisation", "Explaining data insights"],
      desirable_skills: ["SQL", "Dashboard reporting", "Digital analytics", "Survey design", "Stakeholder communication"],
      typical_entry_stage: "Most relevant after students have basic data analysis, market research or customer research project experience.",
      evidence_source_ids: ["SRC007", "SRC010", "SRC011", "SRC012", "SRC034"],
      evidence_strength: "moderate"
    },
    {
      role_id: "role_policy_researcher",
      career_role: "Policy Researcher / Policy Officer",
      sector: "Policy and public service",
      role_summary: "Uses research, consultation and evidence analysis to support policy advice, briefings, evaluation and communication with stakeholders.",
      degree_relevance_tags: ["politics", "social sciences", "sociology", "public policy", "international relations", "law", "economics", "public administration"],
      essential_skills: ["Policy analysis", "Evidence synthesis", "Research design", "Written communication", "Stakeholder communication", "Report writing"],
      desirable_skills: ["Quantitative research", "Qualitative research", "Data visualisation", "Project coordination", "Presentation"],
      typical_entry_stage: "Useful for students with policy modules, research essays, volunteering, internships, student representation or dissertation evidence.",
      evidence_source_ids: ["SRC013", "SRC014", "SRC015"],
      evidence_strength: "strong"
    },
    {
      role_id: "role_data_analyst",
      career_role: "Data Analyst",
      sector: "Data and analytics",
      role_summary: "Collects, cleans, analyses and explains data to produce insight for operational, business, research or public-service decisions.",
      degree_relevance_tags: ["data analytics", "statistics", "mathematics", "computer science", "economics", "business", "sociology", "social sciences"],
      essential_skills: ["Data cleaning", "Statistical analysis", "Excel", "Data visualisation", "Explaining data insights", "Attention to detail"],
      desirable_skills: ["Python", "SQL", "Dashboard reporting", "Problem solving", "Written communication"],
      typical_entry_stage: "Relevant once students can show spreadsheet, statistics, coding, dashboard or data-project evidence; internships and portfolio projects help.",
      evidence_source_ids: ["SRC016", "SRC017", "SRC018", "SRC019"],
      evidence_strength: "strong"
    },
    {
      role_id: "role_business_analyst",
      career_role: "Business Analyst",
      sector: "Business and digital transformation",
      role_summary: "Investigates business needs, processes and problems, then communicates requirements and possible improvements to stakeholders and delivery teams.",
      degree_relevance_tags: ["business", "management", "information systems", "data analytics", "economics", "law", "social sciences", "psychology"],
      essential_skills: ["Requirements gathering", "Business process analysis", "Stakeholder communication", "Problem solving", "Written communication", "Presentation"],
      desirable_skills: ["Data visualisation", "SQL", "Excel", "Project coordination", "Explaining data insights"],
      typical_entry_stage: "Relevant for students who can evidence analysis, process improvement, stakeholder work, internships, placements or systems projects.",
      evidence_source_ids: ["SRC020", "SRC021", "SRC022", "SRC023"],
      evidence_strength: "strong"
    },
    {
      role_id: "role_people_analyst",
      career_role: "People Analyst",
      sector: "People and HR analytics",
      role_summary: "Uses HR, workforce and organisational data to create people insights that support evidence-based decisions about employees and work.",
      degree_relevance_tags: ["human resources", "business", "psychology", "sociology", "social sciences", "data analytics", "statistics", "management"],
      essential_skills: ["People data analysis", "Data cleaning", "Excel", "Data visualisation", "Explaining data insights", "Data ethics and confidentiality"],
      desirable_skills: ["Statistical analysis", "Dashboard reporting", "Stakeholder communication", "Presentation", "Project coordination"],
      typical_entry_stage: "Useful when students can connect basic analytics with HR, organisational behaviour, psychology or business project evidence.",
      evidence_source_ids: ["SRC024", "SRC025", "SRC035", "SRC036"],
      evidence_strength: "moderate"
    },
    {
      role_id: "role_project_assistant",
      career_role: "Project Assistant",
      sector: "Project and operations support",
      role_summary: "Supports project teams with coordination, records, scheduling, progress tracking, communication and practical delivery tasks.",
      degree_relevance_tags: ["business", "management", "social sciences", "communications", "information systems", "public administration", "any subject"],
      essential_skills: ["Project coordination", "Time management", "Teamwork", "Written communication", "Stakeholder communication", "Attention to detail"],
      desirable_skills: [],
      typical_entry_stage: "Useful for students who have coordinated activities, kept records, supported events or helped teams deliver tasks on time.",
      evidence_source_ids: ["SRC026", "SRC027", "SRC028", "SRC037", "SRC038"],
      evidence_strength: "moderate"
    },
    {
      role_id: "role_communications_assistant",
      career_role: "Communications Assistant",
      sector: "Communications and public engagement",
      role_summary: "Supports written, digital and stakeholder communications, often helping with public relations, social media, content and presentations.",
      degree_relevance_tags: ["communications", "media", "english", "marketing", "politics", "social sciences", "sociology", "public relations"],
      essential_skills: ["Written communication", "Public relations writing", "Social media communication", "Stakeholder communication", "Presentation", "Teamwork"],
      desirable_skills: ["Digital analytics", "Project coordination", "Report writing", "Attention to detail"],
      typical_entry_stage: "Useful for students with writing samples, student society communications, volunteering, placement or digital content experience.",
      evidence_source_ids: ["SRC029", "SRC030", "SRC031", "SRC032", "SRC039", "SRC040"],
      evidence_strength: "moderate"
    }
  ];

  const SKILL_OPTIONS = [
    { label: "Literature review", category: "Research skills", synonyms: ["literature search", "evidence review", "desk research"] },
    { label: "Research design", category: "Research skills", synonyms: ["research planning", "methodology", "study design"] },
    { label: "Survey design", category: "Research skills", synonyms: ["questionnaire design", "polls", "surveys"] },
    { label: "Qualitative research", category: "Research skills", synonyms: ["interviews", "focus groups", "ethnography", "qualitative methods"] },
    { label: "Quantitative research", category: "Research skills", synonyms: ["quantitative methods", "numerical analysis", "research statistics"] },
    { label: "Data collection", category: "Research skills", synonyms: ["fieldwork", "collect data", "gather data", "records"] },
    { label: "Evidence synthesis", category: "Research skills", synonyms: ["evidence review", "analysing evidence", "briefing evidence"] },
    { label: "Policy analysis", category: "Research skills", synonyms: ["policy advice", "policy evaluation", "policy research"] },
    { label: "User or customer research", category: "Research skills", synonyms: ["consumer research", "customer insight", "user research", "customer behaviour"] },
    { label: "Data ethics and confidentiality", category: "Professional and project skills", synonyms: ["research ethics", "data ethics", "responsible data use", "data protection", "confidentiality", "privacy"] },
    { label: "Market analysis", category: "Research skills", synonyms: ["market research", "competitor analysis", "consumer trends"] },
    { label: "Excel", category: "Data and technical skills", synonyms: ["spreadsheets", "Microsoft Excel", "spreadsheet analysis"] },
    { label: "Data cleaning", category: "Data and technical skills", synonyms: ["data quality", "clean data", "prepare data", "manipulate data"] },
    { label: "Statistical analysis", category: "Data and technical skills", synonyms: ["statistics", "statistical methods", "numerical analysis"] },
    { label: "Python", category: "Data and technical skills", synonyms: ["coding", "programming", "pandas", "programming languages"] },
    { label: "SQL", category: "Data and technical skills", synonyms: ["databases", "querying data", "structured query language"] },
    { label: "Data visualisation", category: "Data and technical skills", synonyms: ["charts", "graphs", "visual analytics", "infographics"] },
    { label: "Dashboard reporting", category: "Data and technical skills", synonyms: ["dashboards", "BI tools", "business intelligence", "reporting dashboards"] },
    { label: "Digital analytics", category: "Data and technical skills", synonyms: ["web analytics", "social media analytics", "online data"] },
    { label: "People data analysis", category: "Data and technical skills", synonyms: ["HR analytics", "workforce analytics", "talent analytics"] },
    { label: "Report writing", category: "Communication skills", synonyms: ["research reports", "written reports", "findings reports"] },
    { label: "Written communication", category: "Communication skills", synonyms: ["writing", "documentation", "written briefing", "written skills"] },
    { label: "Presentation", category: "Communication skills", synonyms: ["presenting", "oral briefing", "public speaking"] },
    { label: "Stakeholder communication", category: "Communication skills", synonyms: ["stakeholder engagement", "interpersonal skills", "client communication"] },
    { label: "Public relations writing", category: "Communication skills", synonyms: ["press releases", "media releases", "PR writing", "content writing"] },
    { label: "Social media communication", category: "Communication skills", synonyms: ["social media", "digital media", "online communications"] },
    { label: "Explaining data insights", category: "Communication skills", synonyms: ["data storytelling", "explain findings", "communicate insight"] },
    { label: "Teamwork", category: "Professional and project skills", synonyms: ["collaboration", "working with others", "team working"] },
    { label: "Project coordination", category: "Professional and project skills", synonyms: ["project support", "coordination", "project management", "monitor progress"] },
    { label: "Time management", category: "Professional and project skills", synonyms: ["deadlines", "organise workload", "planning time", "prioritise workload"] },
    { label: "Problem solving", category: "Professional and project skills", synonyms: ["critical thinking", "logical thinking", "analytical problem solving"] },
    { label: "Attention to detail", category: "Professional and project skills", synonyms: ["accuracy", "detail oriented", "thoroughness"] },
    { label: "Requirements gathering", category: "Professional and project skills", synonyms: ["elicitation", "understand business needs", "gather requirements"] },
    { label: "Business process analysis", category: "Professional and project skills", synonyms: ["process analysis", "business improvement", "systems analysis"] }
  ];

  const SUPPORTED_DEGREE_AREAS = [
    {
      label: "Sociology",
      aliases: ["sociology"],
      directTags: ["sociology"],
      relatedTags: ["social sciences", "psychology", "public policy", "research methods"],
      broadTags: ["education", "public health"]
    },
    {
      label: "Social Sciences",
      aliases: ["social science", "social sciences"],
      directTags: ["social sciences"],
      relatedTags: ["sociology", "psychology", "politics", "public policy", "education", "public health"],
      broadTags: ["economics", "business"]
    },
    {
      label: "Politics / International Relations",
      aliases: ["politics", "political science", "international relations"],
      directTags: ["politics", "international relations"],
      relatedTags: ["public policy", "public administration", "social sciences", "law"],
      broadTags: ["economics", "communications"]
    },
    {
      label: "Public Policy",
      aliases: ["public policy", "policy studies"],
      directTags: ["public policy"],
      relatedTags: ["politics", "public administration", "social sciences", "economics", "law"],
      broadTags: ["business", "education", "public health"]
    },
    {
      label: "Economics",
      aliases: ["economics", "economy"],
      directTags: ["economics"],
      relatedTags: ["business", "statistics", "data analytics", "public policy", "social sciences"],
      broadTags: ["management"]
    },
    {
      label: "Data Analytics",
      aliases: ["data analytics", "data analysis", "data science", "business analytics", "analytics"],
      directTags: ["data analytics", "statistics"],
      relatedTags: ["business", "economics", "information systems"],
      broadTags: ["social sciences"]
    },
    {
      label: "Psychology",
      aliases: ["psychology", "psychological sciences"],
      directTags: ["psychology"],
      relatedTags: ["social sciences", "consumer behaviour", "human resources", "sociology"],
      broadTags: ["education", "public health", "business"]
    },
    {
      label: "Business / Management",
      aliases: ["business", "management", "business management"],
      directTags: ["business", "management"],
      relatedTags: ["human resources", "information systems", "economics", "marketing"],
      broadTags: ["social sciences"]
    },
    {
      label: "Marketing / Consumer Behaviour",
      aliases: ["marketing", "consumer behaviour", "consumer behavior"],
      directTags: ["marketing", "consumer behaviour"],
      relatedTags: ["business", "psychology", "social sciences"],
      broadTags: ["communications"]
    },
    {
      label: "Communications / Media",
      aliases: ["communications", "communication", "media", "public relations", "journalism"],
      directTags: ["communications", "media", "public relations"],
      relatedTags: ["english", "marketing", "politics"],
      broadTags: ["social sciences", "business"]
    },
    {
      label: "Humanities",
      aliases: ["humanities", "english", "history", "philosophy", "literature", "classics"],
      directTags: ["english"],
      relatedTags: ["communications", "media", "public relations", "politics"],
      broadTags: ["social sciences"]
    },
    {
      label: "Education",
      aliases: ["education", "education studies"],
      directTags: ["education"],
      relatedTags: ["social sciences", "psychology", "public policy"],
      broadTags: ["sociology", "public health"]
    },
    {
      label: "Public Health",
      aliases: ["public health", "health studies"],
      directTags: ["public health"],
      relatedTags: ["social sciences", "psychology", "public policy", "data analytics"],
      broadTags: ["education", "sociology"]
    }
  ];

  const UNSUPPORTED_DEGREE_WARNING = "Your degree subject is outside the main scope of this MVP. Results are mainly based on transferable skills and may be less reliable.";

  const SCORE_WEIGHTS = {
    essential: 50,
    desirable: 15,
    degree: 20,
    sector: 10,
    stage: 5
  };

  const ACADEMIC_STAGE_OPTIONS = [
    { value: "year1", label: "Year 1" },
    { value: "year2", label: "Year 2" },
    { value: "final", label: "Final year" },
    { value: "masters", label: "Master's student" }
  ];

  const ACADEMIC_STAGE_FIT = {
    year1: {
      directRoles: ["role_research_assistant", "role_project_assistant", "role_communications_assistant"],
      relatedRoles: ["role_social_researcher", "role_market_research_analyst", "role_policy_researcher"],
      directGuidance: "This role can be explored at your current academic level. Use Year 1 for broad exploration and early skill-building.",
      relatedGuidance: "This role can be explored at your current academic level, but keep the focus on broad exploration and early evidence-building.",
      otherGuidance: "This role may be more suitable after more project, research or internship experience. Use Year 1 to explore the field and build early evidence."
    },
    year2: {
      directRoles: [
        "role_research_assistant",
        "role_social_researcher",
        "role_project_assistant",
        "role_market_research_analyst",
        "role_data_analyst",
        "role_policy_researcher",
        "role_communications_assistant",
        "role_customer_insights_analyst"
      ],
      relatedRoles: ["role_business_analyst", "role_people_analyst"],
      directGuidance: "This role can be explored at your current academic level. Look for internships, research experience, project support or related student projects.",
      relatedGuidance: "This role can be explored at your current academic level, especially if you build project, internship or data-related examples.",
      otherGuidance: "This role may be more suitable after more project, research or internship experience. Year 2 is a good point to build relevant examples."
    },
    final: {
      directRoles: [
        "role_data_analyst",
        "role_business_analyst",
        "role_policy_researcher",
        "role_market_research_analyst",
        "role_customer_insights_analyst",
        "role_communications_assistant"
      ],
      relatedRoles: ["role_social_researcher", "role_people_analyst", "role_research_assistant", "role_project_assistant"],
      directGuidance: "This role can be explored at your current academic level. Use final-year projects, dissertation work and applications to show role-relevant evidence.",
      relatedGuidance: "This role can be explored at your current academic level, especially with clear project, research, dissertation or internship evidence.",
      otherGuidance: "This role can still be explored, but may need clearer project, research or internship evidence before applications."
    },
    masters: {
      directRoles: [
        "role_social_researcher",
        "role_policy_researcher",
        "role_data_analyst",
        "role_people_analyst",
        "role_business_analyst"
      ],
      relatedRoles: ["role_research_assistant", "role_market_research_analyst", "role_customer_insights_analyst"],
      directGuidance: "This role can be explored at your current academic level. Some versions of this role may prefer postgraduate-level research or analytical experience.",
      relatedGuidance: "This role can be explored at your current academic level, especially where you can show postgraduate-level research, analytical or project evidence.",
      otherGuidance: "This role can still be explored, but it is less specifically linked to postgraduate-level research or analytical experience in this MVP."
    }
  };

  function normaliseText(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function unique(values) {
    return Array.from(new Set(values));
  }

  function containsNormalisedPhrase(text, phrase) {
    const normalisedPhrase = normaliseText(phrase);
    return normalisedPhrase && ` ${text} `.includes(` ${normalisedPhrase} `);
  }

  function formatDegreeAreas(areas) {
    if (!areas.length) {
      return "Not recognised in MVP scope";
    }
    if (areas.length === 1) {
      return areas[0];
    }
    if (areas.length === 2) {
      return `${areas[0]} and ${areas[1]}`;
    }
    return `${areas.slice(0, -1).join(", ")} and ${areas[areas.length - 1]}`;
  }

  function analyseDegreeInput(degree) {
    const normalisedDegree = normaliseText(degree);
    const matchedAreas = SUPPORTED_DEGREE_AREAS.filter((area) => {
      const terms = [area.label].concat(area.aliases);
      return terms.some((term) => containsNormalisedPhrase(normalisedDegree, term));
    });
    const labels = unique(matchedAreas.map((area) => area.label));

    return {
      original_degree: degree || "",
      areas: labels,
      recognised_degree_area: formatDegreeAreas(labels),
      is_supported_degree_area: labels.length > 0,
      warning: labels.length > 0 ? "" : UNSUPPORTED_DEGREE_WARNING
    };
  }

  function getRoleDegreeRelevance(role, degreeAnalysis) {
    if (!degreeAnalysis || !degreeAnalysis.areas.length) {
      return { level: "not matched", score: 0 };
    }

    const roleTags = new Set(role.degree_relevance_tags.map(normaliseText));
    let bestLevel = "not matched";
    let bestScore = 0;

    degreeAnalysis.areas.forEach((areaLabel) => {
      const area = SUPPORTED_DEGREE_AREAS.find((item) => item.label === areaLabel);
      if (!area) {
        return;
      }

      const direct = area.directTags.some((tag) => roleTags.has(normaliseText(tag)));
      const related = area.relatedTags.some((tag) => roleTags.has(normaliseText(tag)));
      const broad = roleTags.has("any subject") || area.broadTags.some((tag) => roleTags.has(normaliseText(tag)));

      if (direct && bestScore < SCORE_WEIGHTS.degree) {
        bestLevel = "direct";
        bestScore = SCORE_WEIGHTS.degree;
      } else if (related && bestScore < 14) {
        bestLevel = "related";
        bestScore = 14;
      } else if (broad && bestScore < 8) {
        bestLevel = "broadly related";
        bestScore = 8;
      }
    });

    return { level: bestLevel, score: bestScore };
  }

  function extractSkillsFromText(text) {
    const normalised = normaliseText(text);
    if (!normalised) {
      return [];
    }

    return SKILL_OPTIONS
      .filter((skill) => {
        const terms = [skill.label].concat(skill.synonyms);
        return terms.some((term) => {
          const normalisedTerm = normaliseText(term);
          return normalisedTerm && normalised.includes(normalisedTerm);
        });
      })
      .map((skill) => skill.label);
  }

  function getSelectedSkills(checkedSkills, extraSkillsText) {
    const checked = Array.isArray(checkedSkills) ? checkedSkills : [];
    return unique(checked.concat(extractSkillsFromText(extraSkillsText))).sort();
  }

  function scoreDegreeRelevance(degree, tags) {
    return getRoleDegreeRelevance({ degree_relevance_tags: tags }, analyseDegreeInput(degree)).score;
  }

  function getAcademicStageValue(input) {
    return input.academic_stage || input.year || "";
  }

  function getAcademicStageFit(stage, role) {
    const stageConfig = ACADEMIC_STAGE_FIT[stage];
    if (!stageConfig) {
      return {
        score: 0,
        guidance: "Choose an academic stage to see guidance for when this role may be useful to explore."
      };
    }

    if (stageConfig.directRoles.includes(role.role_id)) {
      return {
        score: SCORE_WEIGHTS.stage,
        guidance: stageConfig.directGuidance
      };
    }

    if (stageConfig.relatedRoles.includes(role.role_id)) {
      return {
        score: 3,
        guidance: stageConfig.relatedGuidance
      };
    }

    return {
      score: 2,
      guidance: stageConfig.otherGuidance
    };
  }

  function scoreRole(role, input) {
    const degreeAnalysis = input.degree_analysis || analyseDegreeInput(input.degree);
    const degreeRelevance = getRoleDegreeRelevance(role, degreeAnalysis);
    const userSkills = new Set(input.skills || []);
    const essentialMatches = role.essential_skills.filter((skill) => userSkills.has(skill));
    const desirableMatches = role.desirable_skills.filter((skill) => userSkills.has(skill));
    const missingEssential = role.essential_skills.filter((skill) => !userSkills.has(skill));
    const missingDesirable = role.desirable_skills.filter((skill) => !userSkills.has(skill));
    const desirableActive = role.desirable_skills.length > 0;
    const sectorActive = Boolean(input.sector);
    const academicStage = getAcademicStageValue(input);
    const academicStageFit = getAcademicStageFit(academicStage, role);

    const essentialScore = (essentialMatches.length / role.essential_skills.length) * SCORE_WEIGHTS.essential;
    const desirableScore = desirableActive
      ? (desirableMatches.length / role.desirable_skills.length) * SCORE_WEIGHTS.desirable
      : 0;
    const degreeScore = degreeRelevance.score;
    const sectorScore = sectorActive && input.sector === role.sector ? SCORE_WEIGHTS.sector : 0;
    const stageScore = academicStage ? academicStageFit.score : 0;

    const activeMaximum =
      SCORE_WEIGHTS.essential +
      (desirableActive ? SCORE_WEIGHTS.desirable : 0) +
      SCORE_WEIGHTS.degree +
      (sectorActive ? SCORE_WEIGHTS.sector : 0) +
      SCORE_WEIGHTS.stage;

    const earnedScore = essentialScore + desirableScore + degreeScore + sectorScore + stageScore;
    const roleFitScore = Math.round((earnedScore / activeMaximum) * 100);
    const skillsToDevelop = missingEssential.concat(missingDesirable).slice(0, 8);

    const scoreExplanation = [
      `${essentialMatches.length} of ${role.essential_skills.length} essential skills matched`,
      desirableActive
        ? `${desirableMatches.length} of ${role.desirable_skills.length} desirable skills matched`
        : "desirable-skill component removed and remaining score rescaled",
      degreeRelevance.level !== "not matched"
        ? `degree relevance is ${degreeRelevance.level}`
        : "degree area is not matched in this role dataset",
      sectorActive
        ? (sectorScore > 0 ? "preferred sector matched" : "preferred sector did not match")
        : "sector component removed and remaining score rescaled"
    ];

    return {
      ...role,
      role_fit_score: roleFitScore,
      recognised_degree_area: degreeAnalysis.recognised_degree_area,
      degree_relevance_level: degreeRelevance.level,
      degree_scope_warning: degreeAnalysis.warning,
      matched_skills: essentialMatches.concat(desirableMatches),
      skills_to_develop: skillsToDevelop,
      score_components: {
        essential: Math.round(essentialScore),
        desirable: Math.round(desirableScore),
        degree: Math.round(degreeScore),
        sector: Math.round(sectorScore),
        stage: Math.round(stageScore),
        active_maximum: activeMaximum
      },
      explanation: scoreExplanation.join("; ") + ".",
      academic_stage_guidance: academicStageFit.guidance,
      study_stage_guidance: academicStageFit.guidance
    };
  }

  function calculateMatches(input) {
    const degreeAnalysis = input.degree_analysis || analyseDegreeInput(input.degree);
    const scoringInput = { ...input, degree_analysis: degreeAnalysis };
    return ROLE_DATA
      .map((role) => scoreRole(role, scoringInput))
      .sort((a, b) => {
        if (b.role_fit_score !== a.role_fit_score) {
          return b.role_fit_score - a.role_fit_score;
        }
        return a.career_role.localeCompare(b.career_role);
      })
      .slice(0, 5);
  }

  function validateProfile(profile) {
    const errors = [];
    if (!profile.degree || !profile.degree.trim()) {
      errors.push("Enter a degree subject.");
    }
    if (!getAcademicStageValue(profile)) {
      errors.push("Select your academic stage.");
    }
    if (!profile.skills.length) {
      errors.push("Select or enter at least one current skill.");
    }
    return errors;
  }

  function renderSkillControls() {
    const container = document.getElementById("skills-list");
    const categories = unique(SKILL_OPTIONS.map((skill) => skill.category));

    container.innerHTML = categories
      .map((category) => {
        const options = SKILL_OPTIONS
          .filter((skill) => skill.category === category)
          .map((skill) => `
            <label class="skill-option">
              <input type="checkbox" name="skills" value="${escapeHtml(skill.label)}">
              <span>${escapeHtml(skill.label)}</span>
            </label>
          `)
          .join("");

        return `
          <div class="skill-group">
            <p class="skill-group-title">${escapeHtml(category)}</p>
            <div class="skill-options">${options}</div>
          </div>
        `;
      })
      .join("");
  }

  function renderSectorOptions() {
    const sectorSelect = document.getElementById("sector");
    const sectors = unique(ROLE_DATA.map((role) => role.sector)).sort();
    sectors.forEach((sector) => {
      const option = document.createElement("option");
      option.value = sector;
      option.textContent = sector;
      sectorSelect.appendChild(option);
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderChart(matches) {
    const chart = document.getElementById("score-chart");
    chart.innerHTML = matches
      .map((match) => `
        <div class="chart-row">
          <div class="chart-label">${escapeHtml(match.career_role)}</div>
          <div class="chart-track">
            <div class="chart-fill" style="width: ${match.role_fit_score}%"></div>
          </div>
          <div class="chart-score">${match.role_fit_score}</div>
        </div>
      `)
      .join("");
  }

  function renderResults(matches) {
    const results = document.getElementById("results");
    const resultCount = document.getElementById("result-count");
    resultCount.textContent = `${matches.length} roles shown`;

    results.innerHTML = matches
      .map((match, index) => {
        const matchedSkills = match.matched_skills.length
          ? renderPills(match.matched_skills, "skill-pill")
          : "<p>No direct skill matches found.</p>";
        const skillsToDevelop = match.skills_to_develop.length
          ? renderPills(match.skills_to_develop, "skill-pill develop-pill")
          : "<p>No immediate gaps from this dataset.</p>";

        return `
          <article class="role-card">
            <div class="role-card-header">
              <div>
                <p class="module-label">Rank ${index + 1}</p>
                <h3>${escapeHtml(match.career_role)}</h3>
                <p class="role-meta">${escapeHtml(match.sector)}</p>
              </div>
              <div class="fit-score" aria-label="Role fit score ${match.role_fit_score} out of 100">
                <span class="score-number">${match.role_fit_score}</span>
                <span>role fit score</span>
              </div>
            </div>
            <p class="summary">${escapeHtml(match.role_summary)}</p>
            <p class="degree-meta"><strong>Recognised degree area:</strong> ${escapeHtml(match.recognised_degree_area)}</p>
            <p class="degree-meta"><strong>Degree relevance:</strong> ${escapeHtml(match.degree_relevance_level)}</p>
            <div class="skill-columns">
              <div>
                <h3>Matched Skills</h3>
                ${matchedSkills}
              </div>
              <div>
                <h3>Skills To Develop</h3>
                ${skillsToDevelop}
              </div>
            </div>
            <p class="score-explanation"><strong>Why this matched:</strong> ${escapeHtml(match.explanation)}</p>
            <p class="stage-guidance"><strong>Academic-stage guidance:</strong> ${escapeHtml(match.academic_stage_guidance)}</p>
            <p class="evidence-strength">Evidence strength: ${escapeHtml(match.evidence_strength)}. Sources: ${escapeHtml(match.evidence_source_ids.join(", "))}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderPills(skills, className) {
    return `
      <ul class="skill-list">
        ${skills.map((skill) => `<li class="${className}">${escapeHtml(skill)}</li>`).join("")}
      </ul>
    `;
  }

  function collectProfileFromForm(form) {
    const formData = new FormData(form);
    const checkedSkills = formData.getAll("skills");
    const degree = formData.get("degree") || "";
    return {
      degree,
      degree_analysis: analyseDegreeInput(degree),
      academic_stage: formData.get("academic-stage") || "",
      sector: formData.get("sector") || "",
      skills: getSelectedSkills(checkedSkills, formData.get("extra-skills") || "")
    };
  }

  function initialiseApp() {
    renderSkillControls();
    renderSectorOptions();

    const form = document.getElementById("student-form");
    const validationSummary = document.getElementById("validation-summary");
    const degreeScopeMessage = document.getElementById("degree-scope-message");
    const results = document.getElementById("results");
    const chart = document.getElementById("score-chart");
    const resultCount = document.getElementById("result-count");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const profile = collectProfileFromForm(form);
      const errors = validateProfile(profile);

      if (errors.length) {
        validationSummary.textContent = errors.join(" ");
        degreeScopeMessage.textContent = "";
        chart.innerHTML = "";
        resultCount.textContent = "Waiting for a complete profile";
        results.innerHTML = '<p class="empty-state">Complete the required fields to see role matches.</p>';
        return;
      }

      validationSummary.textContent = "";
      degreeScopeMessage.textContent = profile.degree_analysis.warning;
      const matches = calculateMatches(profile);
      renderChart(matches);
      renderResults(matches);
    });

    form.addEventListener("reset", () => {
      window.setTimeout(() => {
        validationSummary.textContent = "";
        degreeScopeMessage.textContent = "";
        chart.innerHTML = "";
        resultCount.textContent = "Waiting for a student profile";
        results.innerHTML = '<p class="empty-state">Complete the student profile to see role fit scores, matched skills and skills to develop.</p>';
      }, 0);
    });
  }

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", initialiseApp);
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      ROLE_DATA,
      SKILL_OPTIONS,
      SUPPORTED_DEGREE_AREAS,
      ACADEMIC_STAGE_OPTIONS,
      UNSUPPORTED_DEGREE_WARNING,
      SCORE_WEIGHTS,
      normaliseText,
      analyseDegreeInput,
      getRoleDegreeRelevance,
      getAcademicStageFit,
      extractSkillsFromText,
      getSelectedSkills,
      scoreDegreeRelevance,
      scoreRole,
      calculateMatches,
      validateProfile
    };
  } else {
    root.CareerExplorer = {
      calculateMatches
    };
  }
})(typeof window !== "undefined" ? window : globalThis);
