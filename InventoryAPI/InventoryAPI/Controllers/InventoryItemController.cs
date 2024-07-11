using InventoryAPI.Models;
using InventoryAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace InventoryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryItemController : ControllerBase
    {
        private readonly InventoryItemManager inventoryItemManager;
        public InventoryItemController()
        {
            this.inventoryItemManager = new InventoryItemManager();
        }

        [HttpGet(Name = "GetInventoryItems")]
        public IActionResult GetInventoryItems()
        {
            return Ok(inventoryItemManager.GetItems());
        }

        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetInventoryItem(int id)
        {
            var inventoryItem = inventoryItemManager.GetItem(id);
            if (inventoryItem == null)
            {
                return BadRequest("Not found");
            }
            return Ok(inventoryItem);
        }
        [HttpPost]
        public IActionResult PostInventoryItem(InventoryItem inventoryItem)
        {

            try
            {
                inventoryItemManager.AddItem(inventoryItem);
                return Created();
            }
            catch (Exception ex)
            {
                return BadRequest("The request is not valid");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteInventoryItem(int id)
        {
            var item = inventoryItemManager.GetItem(id);
            if (item == null)
            {
                return BadRequest("item not found");
            }
            inventoryItemManager.RemoveItem(id);
            return Ok();
        }
        [HttpPut]
        public IActionResult PutInventoryItem(InventoryItem inventoryItem)
        {
            if (inventoryItem == null)
                return BadRequest("The item is empty or didn't exist");
            inventoryItemManager.UpdateItem(inventoryItem);
            return Ok(inventoryItem);
        }
    }
}
