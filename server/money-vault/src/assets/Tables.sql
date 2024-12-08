CREATE TABLE IF NOT EXISTS "CryptoAssets"
(
    code character varying(10) NOT NULL,
    name character varying(100)  NOT NULL,
    symbol character varying(10)  NOT NULL,
    rank integer NOT NULL,
    age integer NOT NULL,
    color character varying(7) ,
    png32 text ,
    png64 text ,
    webp32 text ,
    webp64 text ,
    exchanges integer,
    markets integer,
    pairs integer,
    categories jsonb,
    all_time_high_usd numeric(20,8),
    circulating_supply numeric(20,8),
    total_supply numeric(20,8),
    max_supply numeric(20,8),
    links jsonb,
    CONSTRAINT "CryptoAssets_pkey" PRIMARY KEY (code)
)


==================================================================================================
CREATE TABLE IF NOT EXISTS "CryptoPrices"
(
    symbol character varying(10)  NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    rate numeric(20,20) NOT NULL,
    volume numeric(20,2) NOT NULL,
    cap numeric(20,2) NOT NULL,
    liquidity numeric(20,2),
    delta jsonb,
    CONSTRAINT "CryptoPrices_pkey" PRIMARY KEY (symbol, "timestamp")
)

==================================================================================================


CREATE TABLE IF NOT EXISTS "CryptoTransactions"
(
    id character varying(50)  NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    transaction_type character varying(50)  NOT NULL,
    asset character varying(50)  NOT NULL,
    quantity numeric(20,10) NOT NULL,
    currency character(3)  NOT NULL,
    unit_price numeric(20,20) NOT NULL,
    subtotal numeric(20,20) NOT NULL,
    total numeric(20,20) NOT NULL,
    fees_or_spread numeric(20,8) NOT NULL,
    notes text ,
    CONSTRAINT "CryptoTransactions_pkey" PRIMARY KEY (id)
)

   