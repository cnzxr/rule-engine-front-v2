//跨域代理前缀
const API_PROXY_PREFIX = '/api'; //web服务的
const COMPUTE_API_PROXY_PREFIX = '/compute_api'; //计算服务的
const WEB_BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_WEB_BASE_URL : API_PROXY_PREFIX;
const COMPUTE_WEB_BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_COMPUTE_BASE_URL : COMPUTE_API_PROXY_PREFIX;
// const WEB_BASE_URL = process.env.VUE_APP_WEB_BASE_URL
module.exports = {
    user: {
        LOGIN: `${WEB_BASE_URL}/user/login`,
        GET_USER_INFO: `${WEB_BASE_URL}/user/getUserInfo`,
        LOGOUT: `${WEB_BASE_URL}/user/logout`,
        LIST: `${WEB_BASE_URL}/user/list`,
        ADD_USER: `${WEB_BASE_URL}/user/add`,
        DELETE_USER: `${WEB_BASE_URL}/user/delete`,
        UPDATE_USER_INFO: `${WEB_BASE_URL}/user/updateUserInfo`,
        SELECT_USER_BY_ID: `${WEB_BASE_URL}/user/selectUserById`,
        VERIFY_USER_NAME: `${WEB_BASE_URL}/user/verifyUserName`,
        VERIFY_EMAIL: `${WEB_BASE_URL}/user/verifyEmail`,
        UPLOADAVATAR: `${WEB_BASE_URL}/user/uploadAvatar`,
    },
    workspace: {
        LIST: `${WEB_BASE_URL}/workspace/list`,
        CURRENT_WORKSPACE: `${WEB_BASE_URL}/workspace/currentWorkspace`,
        CHANGE: `${WEB_BASE_URL}/workspace/change`,
        ADD: `${WEB_BASE_URL}/workspace/add`,
        EDIT: `${WEB_BASE_URL}/workspace/edit`,
        DELETE_WORKSPACE: `${WEB_BASE_URL}/workspace/delete`,
        ACCESS_KEY: `${WEB_BASE_URL}/workspace/accessKey`,
        UPDATE_ACCESS_KEY: `${WEB_BASE_URL}/workspace/updateAccessKey`,
        SELECT_WORKSPACE_BY_ID: `${WEB_BASE_URL}/workspace/selectWorkSpaceById`,
        VERIFY_WORKSPACE_CODE: `${WEB_BASE_URL}/workspace/verifyWorkspaceCode`,
    },
    workspaceMember: {
        LIST: `${WEB_BASE_URL}/workspaceMember/list`,
        BIND_MEMBER: `${WEB_BASE_URL}/workspaceMember/bindMember`,
        OPTIONAL_PERSONNEL: `${WEB_BASE_URL}/workspaceMember/optionalPersonnel`,
        DELETE_MEMBER: `${WEB_BASE_URL}/workspaceMember/deleteMember`,
        PERMISSION_TRANSFER: `${WEB_BASE_URL}/workspaceMember/permissionTransfer`,
    },
    generalRule: {
        LIST: `${WEB_BASE_URL}/ruleEngine/generalRule/list`,
        DELETE: `${WEB_BASE_URL}/ruleEngine/generalRule/delete`,
        ADD: `${WEB_BASE_URL}/ruleEngine/generalRule/saveRuleDefinition`,
        UPDATE: `${WEB_BASE_URL}/ruleEngine/generalRule/updateRuleDefinition`,
        GET_RULE_CONFIG: `${WEB_BASE_URL}/ruleEngine/generalRule/getRuleConfig`,
        GET_RULE_DEFINITION: `${WEB_BASE_URL}/ruleEngine/generalRule/getRuleDefinition`,
        SAVE_ACTION: `${WEB_BASE_URL}/ruleEngine/generalRule/saveAction`,
        GENERATION_RELEASE: `${WEB_BASE_URL}/ruleEngine/generalRule/generationRelease`,
        RUN_TEST: `${COMPUTE_WEB_BASE_URL}/ruleEngine/generalRuleTest/run`,
        VIEW: `${WEB_BASE_URL}/ruleEngine/generalRule/view`,
        VERIFY_RULE_CODE: `${WEB_BASE_URL}/ruleEngine/generalRule/codeIsExists`,
        SAVE_DEFAULT_ACTION: `${WEB_BASE_URL}/ruleEngine/generalRule/saveDefaultAction`,
        DEFAULT_ACTION_SWITCH: `${WEB_BASE_URL}/ruleEngine/generalRule/defaultActionSwitch`,
        PUBLISH: `${WEB_BASE_URL}/ruleEngine/generalRule/publish`,
    },
    importExport: {
        EXPORT: `${WEB_BASE_URL}/ruleEngine/importExport/export`,
    },
    dataPermission: {
        LIST: `${WEB_BASE_URL}/ruleEngine/dataPermission/list`,
        UPDATE: `${WEB_BASE_URL}/ruleEngine/dataPermission/saveOrUpdateDataPermission`,
    },
    myfunction: {
        LIST: `${WEB_BASE_URL}/ruleEngine/function/list`,
        SELECT_FUNCTION_BY_ID: `${WEB_BASE_URL}/ruleEngine/function/get`,
        RUN: `${COMPUTE_WEB_BASE_URL}/ruleEngine/function/run`,
    },
    condition: {
        UPDATE_CONDITION: `${WEB_BASE_URL}/ruleEngine/condition/update`,
    },
    conditionGroup: {
        SAVE_OR_UPDATE: `${WEB_BASE_URL}/ruleEngine/conditionGroup/saveOrUpdate`,
        DELETE_CONDITION_GROUP: `${WEB_BASE_URL}/ruleEngine/conditionGroup/delete`,
    },
    conditionGroupCondition: {
        SAVE_CONDITION_AND_BIND_GROUP: `${WEB_BASE_URL}/ruleEngine/conditionGroupCondition/saveConditionAndBindGroup`,
        DELETE_CONDITION: `${WEB_BASE_URL}/ruleEngine/conditionGroupCondition/deleteCondition`,
    },
    inputParameter: {
        ADD: `${WEB_BASE_URL}/ruleEngine/inputParameter/add`,
        LIST: `${WEB_BASE_URL}/ruleEngine/inputParameter/list`,
        GET: `${WEB_BASE_URL}/ruleEngine/inputParameter/get`,
        UPDATE: `${WEB_BASE_URL}/ruleEngine/inputParameter/update`,
        DELETE: `${WEB_BASE_URL}/ruleEngine/inputParameter/delete`,
        VERIFY_INOUT_PARAMETER_CODE: `${WEB_BASE_URL}/ruleEngine/inputParameter/codeIsExists`,
    },
    variable: {
        ADD: `${WEB_BASE_URL}/ruleEngine/variable/add`,
        LIST: `${WEB_BASE_URL}/ruleEngine/variable/list`,
        GET: `${WEB_BASE_URL}/ruleEngine/variable/get`,
        UPDATE: `${WEB_BASE_URL}/ruleEngine/variable/update`,
        DELETE: `${WEB_BASE_URL}/ruleEngine/variable/delete`,
        VERIFY_VARIABLE_NAME: `${WEB_BASE_URL}/ruleEngine/variable/nameIsExists`,
    },
    ROUTES: `${WEB_BASE_URL}/routes`,
    GOODS: `${WEB_BASE_URL}/goods`,
    GOODS_COLUMNS: `${WEB_BASE_URL}/columns`,
};
