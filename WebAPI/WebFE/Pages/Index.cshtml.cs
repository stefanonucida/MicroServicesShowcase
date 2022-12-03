using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebFE.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }
        public async Task OnGet()
        {
            String messaggio = "";
            try
            { 
                using (var client = new System.Net.Http.HttpClient())
                {
                    // Call *mywebapi*, and display its response in the page
                    var request = new System.Net.Http.HttpRequestMessage();
                    // webapi is the container name
                    request.RequestUri = new Uri("http://webbe/Counter");
                    var response = await client.SendAsync(request);
                    string counter = await response.Content.ReadAsStringAsync();
                    messaggio = $"Counter value from cache :{counter}";
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                messaggio= ex.Message;
            }
            ViewData["Message"] = messaggio; 
        }

    }
}