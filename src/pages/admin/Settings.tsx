import React, { useState } from 'react';
import { Save, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AdminLayout from '../../components/AdminLayout';

interface DnsRecord {
  id: string;
  record_type: 'DMARC' | 'SPF' | 'DKIM';
  host: string;
  value: string;
}

const Settings = () => {
  const [dnsRecords, setDnsRecords] = useState<DnsRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    fetchDnsRecords();
  }, []);

  const fetchDnsRecords = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('dns_records')
        .select('*')
        .order('record_type');

      if (error) throw error;
      setDnsRecords(data || []);
    } catch (err) {
      console.error('Error fetching DNS records:', err);
      setError('Nie udało się pobrać rekordów DNS');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateRecord = async (id: string, value: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('dns_records')
        .update({ value })
        .eq('id', id);

      if (error) throw error;
      await fetchDnsRecords();
    } catch (err) {
      console.error('Error updating DNS record:', err);
      setError('Nie udało się zaktualizować rekordu DNS');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Ustawienia</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Konfiguracja DNS</h2>

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <Loader2 className="w-8 h-8 animate-spin text-[#DAA520]" />
            </div>
          ) : (
            <div className="space-y-6">
              {dnsRecords.map((record) => (
                <div key={record.id} className="border-b pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-lg">{record.record_type}</h3>
                      <p className="text-gray-600 text-sm">{record.host}</p>
                    </div>
                    <button
                      onClick={() => handleUpdateRecord(record.id, record.value)}
                      className="px-4 py-2 bg-[#DAA520] text-white rounded-lg hover:bg-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>Zapisz</span>
                    </button>
                  </div>
                  <textarea
                    value={record.value}
                    onChange={(e) => {
                      const newRecords = dnsRecords.map((r) =>
                        r.id === record.id ? { ...r, value: e.target.value } : r
                      );
                      setDnsRecords(newRecords);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    rows={3}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;