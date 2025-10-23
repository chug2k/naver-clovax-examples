# ClovaX API Cookbook

Interactive examples showcasing Naver's ClovaX Chat Completions V3 API with Next.js.

## Features

- **News Researcher Example**: Demonstrates tool calling (function calling) with ClovaX and NewsAPI
- Clean, reusable components for building AI chat interfaces
- TypeScript throughout with proper type definitions
- Server actions for secure API key management

## Getting Started

### Prerequisites

1. **Naver Cloud Platform (Clova Studio)**
   - Go to [Clova Studio](https://clovastudio.ncloud.com/)
   - Select your service app and click **"View code"** (코드 보기)
   - You'll see a curl example with two values you need:
     - **API Key** (in Authorization header) → `NCP_API_KEY`
     - **Endpoint URL** (the full URL) → `NCP_CLOVASTUDIO_ENDPOINT`
   - Format: `https://clovastudio.stream.ntruss.com/v3/chat-completions/HCX-XXX`

2. **NewsAPI Key**
   - Sign up at [NewsAPI.org](https://newsapi.org/register)
   - Get your free API key

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```bash
   # Naver Cloud Platform - ClovaX API Keys
   NCP_API_KEY=your_api_key_here
   NCP_CLOVASTUDIO_ENDPOINT=https://clovastudio.stream.ntruss.com/v3/chat-completions/HCX-005

   # NewsAPI.org API Key
   NEWSAPI_KEY=your_newsapi_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
clovax-lecture/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page with examples list
│   ├── examples/
│   │   └── news-researcher/
│   │       ├── page.tsx        # News researcher UI
│   │       └── actions.ts      # Server actions for ClovaX + NewsAPI
│   └── api/
│       └── clovax/
│           └── client.ts       # ClovaX API client utility
├── components/
│   ├── ChatInterface.tsx       # Reusable chat UI component
│   └── ExampleCard.tsx         # Example listing card
├── lib/
│   ├── types.ts                # TypeScript types for ClovaX API
│   └── tools.ts                # Tool definitions for function calling
└── .env.local                  # API keys (not committed)
```

## Examples

### News Researcher

This example demonstrates ClovaX's tool calling capability. The AI can:
- Understand user queries about news
- Automatically call the NewsAPI to search for articles
- Summarize and present the results in natural language

Try asking:
- "What's the latest news about artificial intelligence?"
- "Find me news about climate change from this week"
- "What's happening in technology today?"

## How Tool Calling Works

1. User sends a query
2. ClovaX analyzes the query and decides if a tool call is needed
3. ClovaX returns tool call details (function name and arguments)
4. Server executes the tool (e.g., NewsAPI search)
5. Results are sent back to ClovaX
6. ClovaX generates a natural language response based on the tool results

## Adding More Examples

To add a new example:

1. Create a new directory under `app/examples/your-example/`
2. Add `page.tsx` for the UI
3. Add `actions.ts` for server actions
4. Define any new tools in `lib/tools.ts`
5. Update the home page (`app/page.tsx`) to include your example

## Resources

- [ClovaX Chat Completions V3 API Documentation](https://api.ncloud-docs.com/docs/en/clovastudio-chatcompletionsv3)
- [Naver Cloud Platform - Clova Studio](https://www.ncloud.com/product/aiService/clovaStudio)
- [NewsAPI Documentation](https://newsapi.org/docs)

## License

MIT
