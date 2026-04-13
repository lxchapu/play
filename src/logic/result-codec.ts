/**
 * 结果数据编码/解码工具
 * 用于将测试结果通过 URL 动态路由传递
 */

import type { Scores } from "@/data/types";

export interface ResultPayload {
  code: string;
  scores: Scores;
}

export function encodeResult(code: string, scores: Scores): string {
  const payload: ResultPayload = { code, scores };
  const json = JSON.stringify(payload);
  return btoa(json)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function decodeResult(data: string): ResultPayload {
  try {
    const base64 = data.replace(/-/g, "+").replace(/_/g, "/");
    const json = atob(base64);
    return JSON.parse(json) as ResultPayload;
  } catch {
    return null as unknown as ResultPayload;
  }
}
