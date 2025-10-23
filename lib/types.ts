// ClovaX API Types based on Chat Completions V3

export type MessageContent = string | ContentPart[];

export interface ContentPart {
  type: "text" | "image_url";
  text?: string; // Required if type is "text"
  imageUrl?: {
    url: string; // Public URL of the image
  };
  dataUri?: {
    data: string; // Base64-encoded image string
  };
}

export interface ClovaMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: MessageContent;
  toolCallId?: string; // For tool role messages
  toolCalls?: ToolCall[]; // For assistant messages with tool calls
}

export interface ToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: Record<string, any>; // JSON object (not stringified)
  };
}

export interface Tool {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: {
      type: "object";
      properties: Record<string, ToolParameter>;
      required?: string[];
    };
  };
}

export interface ToolParameter {
  type: "string" | "number" | "boolean" | "object" | "array";
  description: string;
  enum?: string[];
  items?: {
    type: string;
  };
}

export interface ClovaCompletionRequest {
  messages: ClovaMessage[];
  tools?: Tool[];
  toolChoice?: "auto" | "none" | { type: "function"; function: { name: string } };
  topP?: number;
  topK?: number;
  maxTokens?: number;
  temperature?: number;
  repetitionPenalty?: number;
  stop?: string[];
  includeAiFilters?: boolean;
  seed?: number;
}

export interface ClovaCompletionResponse {
  status: {
    code: string;
    message: string;
  };
  result: {
    message: ClovaMessage;
    finishReason: "stop" | "length" | "tool_calls"; // Changed from stopReason
    created: number;
    seed: number;
    usage: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    };
  };
}

export interface NewsSearchParams {
  query: string;
  fromDate?: string;
  toDate?: string;
  language?: string;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
}

export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}
