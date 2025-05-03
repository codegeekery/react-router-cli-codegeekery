export const structure = {
    app: {
        routes: {
            'home.tsx': `import React, { useEffect, useRef } from 'react';
  
  function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      let particles: Array<{
        x: number;
        y: number;
        dx: number;
        dy: number;
        size: number;
      }> = [];
  
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', resize);
      resize();
  
      // Create particles
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1
        });
      }
  
      const animate = () => {
        ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        particles.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(147, 51, 234, 0.5)';
          ctx.fill();
  
          particle.x += particle.dx;
          particle.y += particle.dy;
  
          if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
        });
  
        requestAnimationFrame(animate);
      };
  
      animate();
  
      return () => {
        window.removeEventListener('resize', resize);
      };
    }, []);
  
    return (
      <div className="min-h-screen relative bg-gray-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
        />
        
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl w-full perspective-1000">
            <div className="relative transform-style-3d hover:rotate-y-10 transition-transform duration-500">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl border border-purple-500/20 p-8 shadow-2xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg"></div>
                <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Instrucciones para comenzar:
                </h2>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-2xl text-purple-400 font-bold">01</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                          Crear una nueva página
                        </h3>
                        <p className="text-gray-400 mt-1">
                          Agrega un nuevo archivo en la carpeta routes y configura la ruta en routes.ts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-2xl text-blue-400 font-bold">02</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          Estilos
                        </h3>
                        <p className="text-gray-400 mt-1">
                          Usa clases de TailwindCSS para estilizar tus componentes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;`
        },
        'app.css': `@import "tailwindcss";`,
        'root.tsx': `import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from "react-router";
  import type { Route } from "./+types/root";
  import "./app.css";
  
  export const links: Route.LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
  ];
  
  export function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
  
  export default function App() {
    return <Outlet />;
  }
  
  export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;
  
    if (isRouteErrorResponse(error)) {
      message = error.status === 404 ? "404" : "Error";
      details =
        error.status === 404
          ? "The requested page could not be found."
          : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
      details = error.message;
      stack = error.stack;
    }
  
    return (
      <main className="pt-16 p-4 container mx-auto">
        <h1>{message}</h1>
        <p>{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
      </main>
    );
  }`,
        'routes.ts': `import { type RouteConfig, index } from "@react-router/dev/routes";
  
  export default [index("routes/home.tsx")] satisfies RouteConfig;`
    },
    public: {},
    'react-router.config.ts': `import type { Config } from "@react-router/dev/config";

  export default {
    ssr: true,
  } satisfies Config;`,
    'tsconfig.json': `{
    "include": [
      "**/*",
      "**/.server/**/*",
      "**/.client/**/*",
      ".react-router/types/**/*"
    ],
    "compilerOptions": {
      "lib": ["DOM", "DOM.Iterable", "ES2022"],
      "types": ["node", "vite/client"],
      "target": "ES2022",
      "module": "ES2022",
      "moduleResolution": "bundler",
      "jsx": "react-jsx",
      "rootDirs": [".", "./.react-router/types"],
      "baseUrl": ".",
      "paths": {
        "~/*": ["./app/*"]
      },
      "esModuleInterop": true,
      "verbatimModuleSyntax": true,
      "noEmit": true,
      "resolveJsonModule": true,
      "skipLibCheck": true,
      "strict": true
    }
  }`,
    'vite.config.js': `import { reactRouter } from "@react-router/dev/vite";
  import tailwindcss from "@tailwindcss/vite";
  import { defineConfig } from "vite";
  import tsconfigPaths from "vite-tsconfig-paths";
  
  export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  });`
};
