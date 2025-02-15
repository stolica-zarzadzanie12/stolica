/*
  # Add DMARC record configuration

  1. New Tables
    - `dns_records` table to store DNS record configurations
      - `id` (uuid, primary key)
      - `record_type` (text) - Type of DNS record (DMARC, SPF, DKIM)
      - `host` (text) - Host/domain name
      - `value` (text) - Record value/content
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `dns_records` table
    - Add policies for authenticated users
*/

-- Create dns_records table
CREATE TABLE dns_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  record_type text NOT NULL CHECK (record_type IN ('DMARC', 'SPF', 'DKIM')),
  host text NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE dns_records ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow authenticated users to view DNS records" ON dns_records
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to manage DNS records" ON dns_records
  FOR ALL
  TO authenticated
  USING (true);

-- Insert DMARC record
INSERT INTO dns_records (record_type, host, value)
VALUES (
  'DMARC',
  '_dmarc.stolica-zarzadzanienieruchomosciami.pl',
  'v=DMARC1; p=reject; rua=mailto:dmarc@stolica-zarzadzanienieruchomosciami.pl; ruf=mailto:forensic@stolica-zarzadzanienieruchomosciami.pl; pct=100; aspf=s; adkim=s'
);

-- Insert SPF record
INSERT INTO dns_records (record_type, host, value)
VALUES (
  'SPF',
  'stolica-zarzadzanienieruchomosciami.pl',
  'v=spf1 include:_spf.google.com include:_spf.facebook.com -all'
);

-- Add comment
COMMENT ON TABLE dns_records IS 'DNS records configuration including DMARC, SPF and DKIM records';