using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Reimbursement
    {
        public DateTime Date { get; set; }
        public int Amount { get; set; }
        public string Description { get; set; }
        public IFormFile Receipt { get; set; }
    }
}
