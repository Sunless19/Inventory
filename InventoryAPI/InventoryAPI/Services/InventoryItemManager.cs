using InventoryAPI.InventoryDBContext;
using InventoryAPI.Models;

namespace InventoryAPI.Services
{
    public class InventoryItemManager
    {
        private readonly InventoryDBContextClass inventoryDBContext;
        public InventoryItemManager()
        {
            inventoryDBContext = new InventoryDBContextClass();
        }
        public List<InventoryItem> GetItems()
        {
            return inventoryDBContext.InventoryItems.ToList();

        }

        public InventoryItem GetItem(int id)
        {
            return inventoryDBContext.InventoryItems.FirstOrDefault(x => x.Id == id);
        }

        public void AddItem(InventoryItem item)
        {
            inventoryDBContext.InventoryItems.Add(item);
            inventoryDBContext.SaveChanges();
        }

        public void RemoveItem(int id)
        {
            var item = inventoryDBContext.InventoryItems.FirstOrDefault(x => x.Id == id);
            if (item != null)
            {
                inventoryDBContext.Remove(item);
                inventoryDBContext.SaveChanges();
            }
            else
            {
                throw new Exception("item is empty");
            }
        }

        public void UpdateItem(InventoryItem item)
        {
            var existingItem = inventoryDBContext.InventoryItems.FirstOrDefault(x => x.Id == item.Id);
            if (existingItem != null)
            {
                existingItem.Name = item.Name;
                existingItem.Description = item.Description;
                existingItem.Location = item.Location;
                existingItem.User = item.User;
                existingItem.ModifiedAt=item.ModifiedAt;
                existingItem.Deleted = item.Deleted;
                inventoryDBContext.InventoryItems.Update(existingItem);
                inventoryDBContext.SaveChanges();
                
            }
            else
            {
                throw new ArgumentException("Item not found/doesn't exist");
            }
        }
    }
}
