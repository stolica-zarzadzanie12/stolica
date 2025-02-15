/*
  # Create calculator submissions table

  1. New Tables
    - `calculator_submissions`
      - `id` (uuid, primary key)
      - `area` (numeric)
      - `contact` (text)
      - `contact_type` (text)
      - `calculated_cost` (numeric)
      - `discount` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `calculator_submissions` table
    - Add policy for public submissions
*/

CREATE TABLE calculator_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  area numeric NOT NULL,
  contact text NOT NULL,
  contact_type text NOT NULL CHECK (contact_type IN ('email', 'phone')),
  calculated_cost numeric NOT NULL,
  discount numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE calculator_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public submissions" ON calculator_submissions
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to view submissions
CREATE POLICY "Allow authenticated users to view submissions" ON calculator_submissions
  FOR SELECT
  TO authenticated
  USING (true);