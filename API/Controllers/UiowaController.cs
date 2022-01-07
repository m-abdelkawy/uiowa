using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UiowaController : ControllerBase
    {
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult SaveReimbursementData([FromForm] Reimbursement reimbursement)
        {
            try
            {
                var file = Request.Form.Files[0];
                var savePath = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "Images");

                if(file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(savePath, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { reimbursement.Date, reimbursement.Description, reimbursement.Amount ,fullPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Intenal server error {ex}");
            }

        }
    }
}
