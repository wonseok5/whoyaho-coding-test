import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants";

type BaseConfig = Partial<AxiosRequestConfig>;

interface APIOption<K = {}> {
  endPoint: string;
  config?: BaseConfig;
  params?: any;
  body?: K;
  returnRaw?: boolean;
}

enum APIMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

type APIResponse<T> =
  | T & {
      statusCode: number;
      statusMsg: string;
    };

export abstract class BaseAPI {
  abstract URL: string;

  private getURL(endPoint: string) {
    return API_URL + this.URL + endPoint;
  }

  private async getConfigs(config?: BaseConfig) {
    const BASE_CONFIG: BaseConfig = { withCredentials: true };
    return { ...BASE_CONFIG, ...config };
  }

  private async methodFactory<T, K = {}>(
    method: APIMethod,
    option: APIOption<K>
  ): Promise<APIResponse<T>> {
    const { endPoint, config, body, params } = option;
    const URL = this.getURL(endPoint);
    const CONFIG = await this.getConfigs({ ...config, params });
    const needBodyMethod =
      method === APIMethod.POST ||
      method === APIMethod.PUT ||
      method === APIMethod.PATCH;

    try {
      const { data } = needBodyMethod
        ? await axios[method]<APIResponse<T>>(URL, body, CONFIG)
        : await axios[method]<APIResponse<T>>(URL, CONFIG);
      return data;
    } catch (error) {
      throw new Error(`API Error: ${(error as any).message}`);
    }
  }

  protected async get<T>(option: APIOption) {
    return this.methodFactory<T>(APIMethod.GET, option);
  }

  protected async post<T, K = {}>(option: APIOption<K>) {
    return this.methodFactory<T, K>(APIMethod.POST, option);
  }

  protected async put<T, K = {}>(option: APIOption<K>) {
    return this.methodFactory<T, K>(APIMethod.PUT, option);
  }

  protected async patch<T, K = {}>(option: APIOption<K>) {
    return this.methodFactory<T, K>(APIMethod.PATCH, option);
  }
  protected async delete<T, K = {}>(option: APIOption<K>) {
    return this.methodFactory<T, K>(APIMethod.DELETE, option);
  }
}
