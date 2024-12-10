import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { CoinsData } from './coins';
const DATA: any[] = [
  {
    name: 'Bitcoin',
    symbol: '₿',
    rank: 1,
    age: 5815,
    color: '#fa9e32',
    png32:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png',
    png64:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png',
    webp32:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.webp',
    webp64:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.webp',
    exchanges: 191,
    markets: 2545,
    pairs: 768,
    categories: [],
    allTimeHighUSD: 103157.36267401562,
    circulatingSupply: 19790568,
    totalSupply: 19790568,
    maxSupply: 21000000,
    links: {
      website: 'https://bitcoin.org',
      whitepaper: 'https://bitcoin.org/bitcoin.pdf',
      twitter: null,
      reddit: 'https://reddit.com/r/bitcoin',
      telegram: null,
      discord: null,
      medium: null,
      instagram: null,
      tiktok: null,
      youtube: null,
      linkedin: null,
      twitch: null,
      spotify: null,
      naver: null,
      wechat: null,
      soundcloud: null,
    },
    code: 'BTC',
    rate: 102382.17047680142,
    volume: 93341520056,
    cap: 2026201306808,
    delta: {
      hour: 1.0392,
      day: 1.067,
      week: 1.0724,
      month: 1.5046,
      quarter: 1.8049,
      year: 2.3312,
    },
  },
  {
    name: 'Axion',
    rank: 999,
    symbol: 'X',
    age: 1614,
    color: '#1188d2',
    png32:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/axn.png',
    png64:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/axn.png',
    webp32:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/axn.webp',
    webp64:
      'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/axn.webp',
    exchanges: 3,
    markets: 5,
    pairs: 3,
    categories: ['debit_cards', 'launchpad', 'nfts'],
    allTimeHighUSD: 0.0007579587685670895,
    circulatingSupply: 108171291671,
    totalSupply: 367544270048,
    maxSupply: null,
    links: {
      website: 'https://axion.network/',
      whitepaper: 'https://axion.network/pdf/axion-whitepaper.pdf',
      twitter: 'https://twitter.com/axion_network',
      reddit: 'https://reddit.com/r/AXION',
      telegram: 'https://t.me/axionofficial',
      discord: 'https://discord.gg/axion',
      medium: 'https://axionnetwork.medium.com/',
      instagram: 'https://www.instagram.com/crypto_axion',
      tiktok: null,
      youtube: null,
      linkedin: null,
      twitch: null,
      spotify: null,
      naver: null,
      wechat: null,
      soundcloud: null,
    },
    code: 'AXN',
    rate: 0.0000015785020451530458,
    volume: 1361,
    cap: 170748,
    delta: {
      hour: 0.9995,
      day: 1.0173,
      week: 1.0146,
      month: 0.8505,
      quarter: 1.3704,
      year: 0.4631,
    },
  },
];

@Injectable()
export class DataService {
  private readonly pool = new Pool({
    user: 'vickykatoch',
    host: '192.168.68.148',
    database: 'MoneyVault',
    password: 'secretpassword',
    port: 5432,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  async getBalance(): Promise<number> {
    return await this.pool.query('SELECT NOW()').then((res) => res.rows[0].now);
  }
  async downloadAllAssets(): Promise<number> {
    // const data = await fetch('https://api.livecoinwatch.com/coins/list', {
    //   method: 'POST',
    //   headers: new Headers({
    //     'content-type': 'application/json',
    //     'x-api-key': '973f0f96-a2af-45e3-9c42-e5b992a742cc',
    //   }),
    //   body: JSON.stringify({
    //     currency: 'USD',
    //     sort: 'rank',
    //     order: 'ascending',
    //     offset: 0,
    //     limit: 2,
    //     meta: false,
    //   }),
    // }).then((response) => response.json());
    // this.saveToDatabase(DATA);
    this.saveToDatabase(CoinsData);

    return await this.pool.query('SELECT NOW()').then((res) => res.rows[0].now);
  }

  private async saveToDatabase(data: any[]): Promise<void> {
    // debugger;
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      data.forEach(
        async (asset) => await this.insertCryptoAsset(asset, client)
      );
      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
  }

  private async insertCryptoAsset(asset: any, client: PoolClient) {
    const query = `
    INSERT INTO "CryptoAssets" (code, name, symbol, rank, 
    age, color, png32, png64, 
    webp32, webp64, exchanges, markets,pairs, 
    categories, all_time_high_usd, circulating_supply, total_supply, 
    max_supply, links)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
    `;

    return client.query(query, [
      asset.code,
      asset.name,
      asset.symbol,
      asset.rank,
      asset.age,
      asset.color,
      asset.png32,
      asset.png64,
      asset.webp32,
      asset.webp64,
      asset.exchanges,
      asset.markets,
      asset.pairs,
      asset.categories,
      asset.allTimeHighUSD,
      asset.circulatingSupply,
      asset.totalSupply,
      asset.maxSupply,
      asset.links,
    ]);
  }
}
