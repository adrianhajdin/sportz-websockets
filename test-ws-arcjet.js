import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { URL } from 'url';

// Mock wsArcjet
const wsArcjet = {
    protect: async (req) => {
        const url = new URL(req.url, 'http://localhost');
        if (url.searchParams.has('deny')) {
            return {
                isDenied: () => true,
                reason: {
                    isRateLimit: () => url.searchParams.get('deny') === 'rate',
                }
            };
        }
        return { isDenied: () => false };
    }
};

const server = http.createServer();
const wss = new WebSocketServer({ noServer: true, path: '/ws' });

server.on('upgrade', async (req, socket, head) => {
    constimport http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { URL } from 'url';

// Mock wsArcjet
const wsArcjet = {
    protect: async (req) => {
        const url = new URL(req.url, 'http://localhost');
        if (url.searchPa iimport { WebSocketServer, Webt(import { URL } from 'url';

// Mock wsArcjet
co9 
// Mock wsArcjet
const wsArcje
  const wsArcjet  e    protect: asyn          const url = new URL(/1        if (url.searchParams.has('deny')) {
                          return {
                isDenied: (                  isDtc                reason: {
                              isRaro                }
            };
        }
        return { isDenied: () => false };
    }              };
 de        }
             tu    }
};

const server = http.createServde};

, sockconst wss = new WebSocketServss.emit
server.on('upgrade', async (req, socket, head) => {
    constim (w    constimport http from 'http';
import { WebSock(0import { WebSocketServer, WebSocket } r.import { URL } from 'url';

// Mock wsArcjet
cong
// Mock wsArcjet
const wsArcests const wsArcjet am    protect: asynne        const url = new URL(ho        if (url.searchPa iimport { WebSocketServer, Webt(impor 
