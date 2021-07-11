import {request, METHOD} from '@/utils/request'
import {inputParameter} from "@/services/api";

/**
 * 保存规则参数
 * @param param
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function addInputParameter(param) {
    return request(inputParameter.ADD, METHOD.POST, param)
}

/**
 * 获取参数列表
 * @param query
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function list(query) {
    return request(inputParameter.LIST, METHOD.POST, query)
}

/**
 * 根据id查询
 * @param query
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function get(query) {
    return request(inputParameter.GET, METHOD.POST, query)
}

/**
 * 根据id更新
 * @param query
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
export async function update(query) {
    return request(inputParameter.UPDATE, METHOD.POST, query)
}

/**
 * 根据id删除
 * @param query
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
export async function deleteById(query) {
    return request(inputParameter.DELETE, METHOD.POST, query)
}
