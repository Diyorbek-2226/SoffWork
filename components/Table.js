export default function DomainTable() {
    const domains = [
      { id: 1, name: "Domain 1", mozAuthority: 99, spamScore: 1, majesticCF: 97, traffic: "less than 30", language: "eng" },
      { id: 2, name: "Domain 2", mozAuthority: 71, spamScore: 1, majesticCF: 75, traffic: "less than 30", language: "eng" },
      { id: 3, name: "Domain 3", mozAuthority: 95, spamScore: 3, majesticCF: 72, traffic: "less than 30", language: "eng" },
      { id: 4, name: "Domain 4", mozAuthority: 90, spamScore: 1, majesticCF: 71, traffic: "less than 30", language: "eng" },
      { id: 5, name: "Domain 5", mozAuthority: 91, spamScore: 8, majesticCF: 71, traffic: "less than 30", language: "eng" },
      { id: 6, name: "Domain 6", mozAuthority: 94, spamScore: 2, majesticCF: 66, traffic: "less than 30", language: "eng" },
      { id: 7, name: "Domain 7", mozAuthority: 94, spamScore: 3, majesticCF: 64, traffic: "less than 30", language: "eng" },
      { id: 8, name: "Domain 8", mozAuthority: 91, spamScore: 3, majesticCF: 64, traffic: "less than 30", language: "eng" },
      { id: 9, name: "Domain 9", mozAuthority: 72, spamScore: 15, majesticCF: 61, traffic: "less than 30", language: "eng" },
      { id: 10, name: "Domain 10", mozAuthority: 76, spamScore: 16, majesticCF: 61, traffic: "less than 30", language: "eng" },
      { id: 11, name: "Domain 11", mozAuthority: 92, spamScore: 1, majesticCF: 59, traffic: "less than 30", language: "eng" },
      { id: 12, name: "Domain 12", mozAuthority: 80, spamScore: 14, majesticCF: 58, traffic: "less than 30", language: "eng" },
      { id: 13, name: "Domain 13", mozAuthority: 91, spamScore: 10, majesticCF: 57, traffic: "less than 30", language: "eng" },
      { id: 14, name: "Domain 14", mozAuthority: 77, spamScore: 1, majesticCF: 57, traffic: "less than 30", language: "eng" },
      { id: 15, name: "Domain 15", mozAuthority: 75, spamScore: 6, majesticCF: 56, traffic: "less than 30", language: "eng" },
      { id: 16, name: "Domain 16", mozAuthority: 87, spamScore: 1, majesticCF: 55, traffic: "less than 30", language: "eng" },
      { id: 17, name: "Domain 17", mozAuthority: 69, spamScore: 1, majesticCF: 52, traffic: "less than 30", language: "eng" },
      { id: 18, name: "Domain 18", mozAuthority: 91, spamScore: 1, majesticCF: 51, traffic: "less than 30", language: "eng" },
    ];
  
    return (
      <div className="blog_details__wrapper bg-body-2 section_gap_y_bottom__1 pt-60 overflow-hidden">
       <div className="container table-container">
       <table className="domain-table">
          <thead>
            <tr>
              <th>Domain</th>
              <th>
                Moz Domain Authority <span className="info-icon">?</span>
              </th>
              <th>
                Moz Spam Score <span className="info-icon">?</span>
              </th>
              <th>
                Majestic CF <span className="info-icon">?</span>
              </th>
              <th>
                Traffic <span className="info-icon">?</span>
              </th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain) => (
              <tr key={domain.id}>
                <td>{domain.name}</td>
                <td>{domain.mozAuthority}</td>
                <td className="spam-score">{domain.spamScore}</td>
                <td>{domain.majesticCF}</td>
                <td className="traffic">{domain.traffic}</td>
                <td>{domain.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
    );
  }
  
  