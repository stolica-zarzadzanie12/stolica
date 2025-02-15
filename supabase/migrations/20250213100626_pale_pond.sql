/*
  # Update DMARC record configuration

  1. Changes
    - Update DMARC record with stricter policy
    - Add aggregate and forensic reporting
    - Set strict alignment for SPF and DKIM
    - Apply policy to 100% of messages
    - Add subdomain policy

  2. Security
    - Enforces strict email authentication
    - Enables monitoring through reporting
    - Protects against email spoofing
*/

-- Update existing DMARC record with improved configuration
UPDATE dns_records
SET 
  value = 'v=DMARC1; p=reject; rua=mailto:dmarc@stolica-zarzadzanienieruchomosciami.pl; ruf=mailto:forensic@stolica-zarzadzanienieruchomosciami.pl; pct=100; aspf=s; adkim=s; sp=reject',
  updated_at = now()
WHERE record_type = 'DMARC'
  AND host = '_dmarc.stolica-zarzadzanienieruchomosciami.pl';

COMMENT ON TABLE dns_records IS 'DNS records including DMARC configuration with strict policy and reporting';